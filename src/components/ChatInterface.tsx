import { useEffect, useRef } from "react";

interface ChatInterfaceProps {
  botpressConfig?: {
    botId?: string;
    hostUrl?: string;
    messagingUrl?: string;
    clientId?: string;
  };
}

const ChatInterface = ({ botpressConfig }: ChatInterfaceProps) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const configScript = document.createElement("script");
      configScript.innerHTML = `
        window.botpressWebChat.init({
          composerPlaceholder: "Posez votre question...",
          botConversationDescription: "Votre assistant IA",
          botId: "${botpressConfig?.botId || 'your-bot-id'}",
          hostUrl: "${botpressConfig?.hostUrl || 'https://cdn.botpress.cloud/webchat/v1'}",
          messagingUrl: "${botpressConfig?.messagingUrl || 'https://messaging.botpress.cloud'}",
          clientId: "${botpressConfig?.clientId || 'your-client-id'}",
          webhookId: "your-webhook-id",
          lazySocket: true,
          themeName: "prism",
          frontendVersion: "v1",
          useSessionStorage: true,
          enableConversationDeletion: true,
          showPoweredBy: false,
          theme: "dark",
          themeColor: "#7c3aed"
        });
      `;
      document.body.appendChild(configScript);
      scriptLoaded.current = true;
    };

    return () => {
      if (scriptLoaded.current) {
        script.remove();
      }
    };
  }, [botpressConfig]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Agent IA Botpress
        </h2>
        <p className="text-muted-foreground max-w-md">
          Posez vos questions et interagissez avec votre assistant IA personnel.
          Le chat s'ouvrira dans le coin inférieur droit.
        </p>
      </div>
      
      <div className="w-full max-w-2xl space-y-4 text-sm text-muted-foreground">
        <div className="p-4 bg-card/50 border border-border/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-foreground">Configuration</h3>
          <p>
            Pour connecter votre agent Botpress, vous devez configurer les paramètres suivants
            dans le composant ChatInterface :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Bot ID</li>
            <li>Client ID</li>
            <li>Webhook ID</li>
          </ul>
          <p className="mt-2">
            Ces informations sont disponibles dans votre tableau de bord Botpress Cloud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
