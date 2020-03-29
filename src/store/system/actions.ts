import { Message, MessageExtract,TagID, TagMutator, ModifyTagType, ADD_TAGS } from './types';
import { PUSH_TODO_MESSAGE, PUSH_INDEV_MESSAGE, PUSH_DONE_MESSAGE } from './types';
import { ADV_TODO_MESSAGE, ADV_INDEV_MESSAGE, PREV_DONE_MESSAGE, PREV_INDEV_MESSAGE } from './types';
import { SHOW_TAG_SELECTOR, HIDE_TAG_SELECTOR } from './types';
import { GenericPushType, GenericShiftType, GenericTagType } from './types';

// TypeScript infers that this function is returning SendMessageAction
export function createTODOMessage(newMessage: Message): GenericPushType {
  return {
    type: PUSH_TODO_MESSAGE,
    payload: newMessage
  }
}

export function createInDevMessage(newMessage: Message): GenericPushType {
  return {
    type: PUSH_INDEV_MESSAGE,
    payload: newMessage
  }
}

export function createDoneMessage(newMessage: Message): GenericPushType {
  return {
    type: PUSH_DONE_MESSAGE,
    payload: newMessage
  }
}

export function advanceTodoMessage(MessageID: MessageExtract): GenericShiftType {
  return {
    type: ADV_TODO_MESSAGE,
    payload: MessageID
  }
}

export function advanceInDevMessage(MessageID: MessageExtract): GenericShiftType {
  return {
    type: ADV_INDEV_MESSAGE,
    payload: MessageID
  }
}

export function previousDoneMessage(MessageID: MessageExtract): GenericShiftType {
  return {
    type: PREV_DONE_MESSAGE,
    payload: MessageID
  }
}

export function previousInDevMessage(MessageID: MessageExtract): GenericShiftType {
  return {
    type: PREV_INDEV_MESSAGE,
    payload: MessageID
  }
}

export function showTagSelector(id: TagID): GenericTagType {
  return {
    type: SHOW_TAG_SELECTOR,
    payload: id
  }
}

export function hideTagSelector(id: TagID): GenericTagType {
  return {
    type: HIDE_TAG_SELECTOR,
    payload: id
  }
}

export function addTags(id: TagMutator): ModifyTagType {
  return {
    type: ADD_TAGS,
    payload: id
  }
}