import { createDiscreteApi, darkTheme, dateKoKR, koKR } from 'naive-ui';
import type { MessageApi, DialogApi, NotificationApi, LoadingBarApi, ModalApi } from 'naive-ui';
import type { InjectionKey } from 'vue';

// 각 서비스에 대한 심볼 생성
export const MessageSymbol: InjectionKey<MessageApi> = Symbol('message');
export const DialogSymbol: InjectionKey<DialogApi> = Symbol('dialog');
export const NotificationSymbol: InjectionKey<NotificationApi> = Symbol('notification');
export const LoadingBarSymbol: InjectionKey<LoadingBarApi> = Symbol('loadingBar');
export const ModalSymbol: InjectionKey<ModalApi> = Symbol('modal');

export default defineNuxtPlugin({
  name: 'storemanager',
  enforce: 'pre',
  hooks: {
    'app:created': (app) => {
      const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
        ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
        {
          configProviderProps: {
            theme: darkTheme,
            locale: koKR,
            dateLocale: dateKoKR,
          },
        },
      );
      // 심볼을 사용하여 타입과 함께 제공
      app.provide(MessageSymbol, message);
      app.provide(DialogSymbol, dialog);
      app.provide(NotificationSymbol, notification);
      app.provide(LoadingBarSymbol, loadingBar);
      app.provide(ModalSymbol, modal);
    },
  },
});
