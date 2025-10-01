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
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const configScript = document.createElement("script");
      configScript.innerHTML = `
        window.botpressWebChat.init({
          botId: "f0490f8c-ab7a-4960-9809-9321526ce89d",
          clientId: "a3ab0d66-9824-413a-b644-e8feffc665cb",
          hostUrl: "https://cdn.botpress.cloud/webchat/v3.2",
          messagingUrl: "https://messaging.botpress.cloud",
          composerPlaceholder: "Posez votre question...",
          botName: "LEIA",
          botDescription: "LEAI est un robot à l'intelligence artificielle générative, répondant à toutes vos questions en matière de droit du travail applicable en Nouvelle-Calédonie",
          useSessionStorage: true,
          enableConversationDeletion: true,
          showPoweredBy: false
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
          LEIA - Assistant Juridique
        </h2>
        <p className="text-muted-foreground max-w-md">
          Posez vos questions en matière de droit du travail applicable en Nouvelle-Calédonie.
          Le chat s'ouvrira dans le coin inférieur droit.
        </p>
      </div>
      
      <div className="w-full max-w-2xl space-y-4 text-sm text-muted-foreground">
        <div className="p-4 bg-card/50 border border-border/50 rounded-lg">
          <h3 className="font-semibold mb-2 text-foreground">Bienvenue</h3>
          <p>
            LEIA est votre assistant juridique intelligent spécialisé dans le droit du travail 
            de Nouvelle-Calédonie. Cliquez sur l'icône de chat en bas à droite pour commencer 
            votre conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
