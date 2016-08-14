export const CURSOR_POSITION_UPDATE = 'CURSOR_POSITION_UPDATE';

export const cursorPositionUpdate = cursorPosition => ({
  type: CURSOR_POSITION_UPDATE,
  payload: cursorPosition,
});