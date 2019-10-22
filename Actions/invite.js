import {
  POST_INVITE,
  COLLECT_INVITE_CATEGORY_STATE,
  COLLECT_INVITE_DETAILS_STATE,
  COLLECT_INVITE_INVITED_USERS_STATE,
  FETCH_USER_INVITES,
  FETCH_USER_PLANS,
  ACCEPT_INVITE
} from "../Constants/actionCreators";
import _ from "lodash";

export function postInvite(invite) {
  return function(dispatch) {
    return fetch("http://localhost:3000/invites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(invite)
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: POST_INVITE, payload: data });
      });
  };
}

export const collectInviteStateCategory = data => ({
  type: COLLECT_INVITE_CATEGORY_STATE,
  payload: data
});

export const collectInviteStateDetails = data => ({
  type: "COLLECT_INVITE_DETAILS_STATE",
  payload: data
});

export const collectInviteStateUsersInvited = data => ({
  type: COLLECT_INVITE_INVITED_USERS_STATE,
  payload: data
});

export function fetchUserInvites(id) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/users/${id}`)
      .then(resp => resp.json())
      .then(res => {
        dispatch({ type: FETCH_USER_INVITES, payload: res.invites });
      });
  };
}

export function fetchUserPlans(id) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/users/${id}`)
      .then(resp => resp.json())
      .then(res => {
        // lodash copy of entire response
        const invitesCopyToRenderInvites = _.clone(res.invites);
        const invitesCopyToRenderAcceptedInvites = _.clone(res.invites);
        // lodash copy of plans object
        const plansClone = _.clone(res.plans);
        const invitesClone = _.clone(res.plans);
        // filter array to find accepted plan to render
        const acceptedPlans = plansClone.filter(plan => plan.accepted === true);
        // Find invite  to render ( plans that have not been accepted or have been declined)
        const invites = invitesClone.filter(plan => plan.accepted === null);

        // extract ids from invites
        const inviteIDArray = [];
        const inviteIDs = invites.forEach(invite => {
          return inviteIDArray.push(invite.invite_id);
        });
        // extract ids from acceptedPlans
        const acceptedPlanIDArray = [];
        const planIDs = acceptedPlans.forEach(plan => {
          return acceptedPlanIDArray.push(plan.invite_id);
        });
        // find invite objects and push into new array
        const invitesToRender = [];

        inviteIDArray.forEach(invite => {
          invitesCopyToRenderInvites.find(copy => {
            if (copy.id === invite) {
              invitesToRender.push(copy);
            }
          });
        });

        // find accepted invite objects and push into new array
        const acceptedPlansToRender = [];
        acceptedPlanIDArray.forEach(invite => {
          invitesCopyToRenderAcceptedInvites.find(copy => {
            if (copy.id === invite) {
              acceptedPlansToRender.push(copy);
            }
          });
        });
        // create object to render from
        const plansInvitesObj = {
          invitesToRender: invitesToRender,
          acceptedPlans: acceptedPlansToRender
        };
        dispatch({
          type: FETCH_USER_PLANS,
          payload: plansInvitesObj
        });
      });
  };
}

export function acceptInvite(data) {
  return function(dispatch) {
    return fetch(`http://localhost:3000/plans/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data.plan)
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        dispatch({ type: ACCEPT_INVITE, payload: response });
      });
  };
}
