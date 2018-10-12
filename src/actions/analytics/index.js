export const AnalyticActions = {
  PAGE_VIEW: 'PAGE_VIEW'
};

export const googleTagManagerEventsMap = {
  PAGE_VIEW: pageView
};

export const googleAnalyticsEventsMap = {};

export function callAnalyticAction(type, payload = {}) {
  return { type, payload };
}

function pageView() {
  const hitType = 'pageview';
  return { hitType };
}

export function pageViewAnalyticsAction() {
  return callAnalyticAction(AnalyticActions.PAGE_VIEW);
}
