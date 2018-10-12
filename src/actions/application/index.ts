export const SERVER_SIDE_RENDER = 'SERVER_SIDE_RENDER';
export const CLIENT_SIDE_RENDER = 'CLIENT_SIDE_RENDER';

/**
 * Action dispatched when article application is rendered on the client.
 * Exists primarily for proof of concept of the boilerplate's functionality
 * @returns {object} article of type `CLIENT_SIDE_RENDER`
 */
export function clientSideRender() {
  return {
    type: CLIENT_SIDE_RENDER
  };
}

/**
 * Action dispatched when article application is rendered on the server
 * Exists primarily for proof of concept of the boilerplate's functionality
 * @returns {object} article of type `SERVER_SIDE_RENDER`
 */
export function serverSideRender() {
  return {
    type: SERVER_SIDE_RENDER
  };
}
