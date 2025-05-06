import type { DialogApiInjection } from 'naive-ui/es/dialog/src/DialogProvider';
import type { LoadingBarApiInjection } from 'naive-ui/es/loading-bar/src/LoadingBarProvider';
import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider';
import type { ModalApiInjection } from 'naive-ui/es/modal/src/ModalProvider';
import type { NotificationApiInjection } from 'naive-ui/es/notification/src/NotificationProvider';
import { DialogSymbol, MessageSymbol, NotificationSymbol, LoadingBarSymbol, ModalSymbol } from '~/plugins/naive-ui-components';

export function useLocalMessage() {
  const message = inject(MessageSymbol);
  return message as MessageApiInjection;
}

export function useLocalDialog() {
  const dialog = inject(DialogSymbol);
  return dialog as DialogApiInjection;
}

export function useLocalNotification() {
  const notification = inject(NotificationSymbol);
  return notification as NotificationApiInjection;
}

export function useLocalLoadingBar() {
  const loadingBar = inject(LoadingBarSymbol);
  return loadingBar as LoadingBarApiInjection;
}

export function useLocalModal() {
  const modal = inject(ModalSymbol);
  return modal as ModalApiInjection;
}
