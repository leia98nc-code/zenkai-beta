interface Window {
  botpressWebChat: {
    init: (config: any) => void;
    sendEvent: (event: { type: string }) => void;
    mergeConfig: (config: any) => void;
  };
}
