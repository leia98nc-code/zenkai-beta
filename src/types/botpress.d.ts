interface Window {
  botpress: {
    init: (config: any) => void;
    on: (event: string, callback: () => void) => void;
    open: () => void;
    close?: () => void;
    destroy?: () => void;
  };
}
