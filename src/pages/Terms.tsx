import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Conditions Générales d'Utilisation et Politique de Confidentialité</h1>
              <p className="text-xl font-semibold text-primary">ZENKAI</p>
              <p className="text-muted-foreground">Dernière mise à jour : 4 février 2026</p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-foreground">
                En utilisant les services ZENKAI, vous acceptez les présentes conditions générales d'utilisation et notre politique de confidentialité.
              </p>
            </div>

            {/* Table des Matières */}
            <nav className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                📋 Table des Matières
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><a href="#acceptation" className="hover:text-primary transition-colors">Acceptation des Conditions</a></li>
                <li><a href="#description" className="hover:text-primary transition-colors">Description des Services</a></li>
                <li><a href="#utilisation" className="hover:text-primary transition-colors">Utilisation des Services</a></li>
                <li><a href="#compte" className="hover:text-primary transition-colors">Création et Gestion de Compte</a></li>
                <li><a href="#protection" className="hover:text-primary transition-colors">Protection des Données Personnelles</a></li>
                <li><a href="#conversations" className="hover:text-primary transition-colors">Conversations avec le Chatbot LEIA</a></li>
                <li><a href="#cookies" className="hover:text-primary transition-colors">Cookies et Technologies Similaires</a></li>
                <li><a href="#droits-rgpd" className="hover:text-primary transition-colors">Vos Droits RGPD</a></li>
                <li><a href="#limitation" className="hover:text-primary transition-colors">Limitation de Responsabilité</a></li>
                <li><a href="#propriete" className="hover:text-primary transition-colors">Propriété Intellectuelle</a></li>
                <li><a href="#modification" className="hover:text-primary transition-colors">Modification des Conditions</a></li>
                <li><a href="#droit-applicable" className="hover:text-primary transition-colors">Droit Applicable et Juridiction</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ol>
            </nav>

            <div className="space-y-12 text-muted-foreground">
              {/* Section 1 */}
              <section id="acceptation">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptation des Conditions</h2>
                <p className="mb-4">
                  En accédant et en utilisant les services ZENKAI (site web <a href="https://zenkai.nc" className="text-primary hover:underline">zenkai.nc</a>) dont LEIA (assistant conversationnel), vous acceptez d'être lié par les présentes conditions générales d'utilisation et notre politique de confidentialité.
                </p>
                <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-destructive">Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.</p>
                </div>
                <p>
                  L'inscription à nos services implique l'acceptation expresse et sans réserve de l'intégralité de ces conditions.
                </p>
              </section>

              {/* Section 2 */}
              <section id="description">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description des Services</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">2.1 ZENKAI</h3>
                <p className="mb-4">
                  ZENKAI est une entreprise de conseil, formation et solutions, spécialisée dans l'accompagnement des TPE/PME de Nouvelle-Calédonie dans leur management dopé à l'intelligence artificielle.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">2.2 LEIA (L'Expert IA Assisté)</h3>
                <p className="mb-4">
                  LEIA est un assistant d'information juridique basé sur l'intelligence artificielle, spécialisé dans le droit du travail et la gestion RH de Nouvelle-Calédonie.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg">
                  <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">⚠️ IMPORTANT :</p>
                  <p>LEIA fournit des informations générales à titre informatif uniquement. Les réponses de LEIA <strong>ne constituent pas un conseil juridique personnalisé</strong> et ne doivent pas être considérées comme telles.</p>
                  <p className="mt-2">Pour des conseils juridiques adaptés à votre situation spécifique, consultez un professionnel du droit qualifié (avocat, juriste).</p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="utilisation">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Utilisation des Services</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">3.1 Conditions d'utilisation</h3>
                <p className="mb-3">Vous vous engagez à :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Utiliser les services ZENKAI et LEIA uniquement à des fins légales et conformes aux présentes conditions</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Fournir des informations exactes et à jour lors de votre inscription</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Maintenir la confidentialité de vos identifiants de connexion</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Respecter les droits de propriété intellectuelle de ZENKAI</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Ne pas utiliser les services pour diffuser des informations fausses, trompeuses ou illégales</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">3.2 Interdictions</h3>
                <p className="mb-3">Il est strictement interdit de :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Tenter de contourner les mesures de sécurité du service</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Utiliser des robots, scripts ou tout moyen automatisé pour accéder aux services</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Tenter d'extraire, copier ou reproduire massivement le contenu de LEIA</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Usurper l'identité d'une autre personne ou entité</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Utiliser les services à des fins commerciales sans autorisation écrite préalable</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Harceler, menacer ou nuire à d'autres utilisateurs</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">3.3 Suspension et Résiliation</h3>
                <p>
                  ZENKAI se réserve le droit de suspendre ou résilier immédiatement votre accès aux services en cas de violation de ces conditions, sans préavis ni indemnité.
                </p>
              </section>

              {/* Section 4 */}
              <section id="compte">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Création et Gestion de Compte</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">4.1 Inscription</h3>
                <p className="mb-3">L'utilisation complète de certains services ZENKAI nécessite la création d'un compte utilisateur.</p>
                <p className="mb-2">Lors de l'inscription, vous devez fournir :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Une adresse e-mail valide</li>
                  <li>Un mot de passe sécurisé</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">4.2 Sécurité du Compte</h3>
                <p className="mb-2">Vous êtes responsable de :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>La confidentialité de vos identifiants de connexion</li>
                  <li>Toutes les activités effectuées sous votre compte</li>
                  <li>Notifier immédiatement ZENKAI en cas d'utilisation non autorisée de votre compte</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">4.3 Suppression de Compte</h3>
                <p className="mb-2">
                  Vous pouvez demander la suppression de votre compte à tout moment en contactant : <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a>
                </p>
                <p>
                  La suppression du compte entraînera la suppression de vos données personnelles conformément à notre politique de conservation (voir section 6.4).
                </p>
              </section>

              {/* Section 5 */}
              <section id="protection">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Protection des Données Personnelles</h2>
                <p className="mb-6">
                  ZENKAI s'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation applicable en Nouvelle-Calédonie.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">5.1 Responsable du Traitement</h3>
                <div className="bg-card border border-border p-4 rounded-lg mb-6">
                  <p className="font-semibold">Baptiste FAURE - ZENKAI</p>
                  <p>Email : <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a></p>
                  <p>RIDET : 1 231 083.002</p>
                </div>

                <h3 className="text-xl font-medium text-foreground mb-3">5.2 Données Collectées</h3>
                <p className="mb-4">Nous collectons les informations suivantes lorsque vous utilisez nos services :</p>

                <h4 className="text-lg font-medium text-foreground mb-2">5.2.1 Données d'Inscription </h4>
                <p className="mb-2">Lors de votre inscription à ZENKAI :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li><strong>Adresse e-mail</strong> : pour créer votre compte et vous contacter</li>
                  <li><strong>Identifiant utilisateur unique (UUID)</strong> : généré automatiquement par le système</li>
                  <li><strong>Date de création du compte</strong></li>
                  <li><strong>Date de dernière connexion</strong></li>
                </ul>
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg mb-6">
                  <p>⚠️ <strong>Vos mots de passe ne sont JAMAIS accessibles par ZENKAI</strong>. Ils sont gérés de façon irréversible par notre prestataire d'authentification Supabase selon les standards de sécurité les plus élevés (hachage bcrypt avec salt unique).</p>
                </div>

                <h4 className="text-lg font-medium text-foreground mb-2">5.2.2 Conversations avec le Chatbot LEIA</h4>
                <p className="mb-2">Lorsque vous utilisez LEIA, nous enregistrons :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li><strong>Contenu intégral de vos messages</strong> et des réponses de LEIA</li>
                  <li><strong>Date et heure</strong> de chaque échange</li>
                  <li><strong>Identifiant de conversation unique</strong> (pour retrouver l'historique)</li>
                  <li><strong>Statut de la conversation</strong> (en cours, terminée, etc.)</li>
                  <li><strong>Métadonnées techniques</strong> : identifiant de session, canal utilisé (web)</li>
                </ul>
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg mb-6">
                  <p>⚠️ <strong>Les conversations sont stockées de manière anonyme</strong> : votre nom n'apparaît pas dans les conversations, seulement "Anonymous User" + un identifiant technique.</p>
                </div>

                <h4 className="text-lg font-medium text-foreground mb-2">5.2.3 Données de Navigation</h4>
                <p className="mb-2">Collectées automatiquement lors de votre visite sur <a href="https://zenkai.nc" className="text-primary hover:underline">zenkai.nc</a> :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li><strong>Adresse IP</strong> (anonymisée après 24 heures)</li>
                  <li><strong>Type de navigateur</strong> et version (ex: Chrome 120, Firefox 115)</li>
                  <li><strong>Système d'exploitation</strong> (Windows, macOS, Linux, Android, iOS)</li>
                  <li><strong>Pages consultées</strong> et durée de visite</li>
                  <li><strong>Provenance</strong> (site d'où vous venez)</li>
                  <li><strong>Horodatage</strong> (date et heure de connexion)</li>
                </ul>

                <h4 className="text-lg font-medium text-foreground mb-2">5.2.4 Cookies Techniques</h4>
                <p className="mb-3">Nous utilisons uniquement des cookies strictement nécessaires :</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Cookie</th>
                        <th className="border border-border p-3 text-left">Durée</th>
                        <th className="border border-border p-3 text-left">Finalité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">sb-access-token</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">Authentification (vous garder connecté)</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">sb-refresh-token</td>
                        <td className="border border-border p-3">30 jours</td>
                        <td className="border border-border p-3">Renouvellement automatique de session</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">cookie-consent</td>
                        <td className="border border-border p-3">12 mois</td>
                        <td className="border border-border p-3">Mémorisation de vos préférences cookies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mb-6">Ces cookies sont <strong>exemptés de consentement</strong> car strictement nécessaires au fonctionnement du service (Article 82 RGPD).</p>

                <h4 className="text-lg font-medium text-foreground mb-2">5.2.5 Données que nous NE collectons PAS</h4>
                <p className="mb-3">Pour votre information, nous ne collectons AUCUNE des données suivantes :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Nom, prénom (sauf si vous les mentionnez dans une conversation LEIA)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Numéro de téléphone</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Adresse postale</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Informations bancaires ou de paiement</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Données de géolocalisation précise (GPS)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Données biométriques (empreintes, reconnaissance faciale)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Historique de navigation en dehors de zenkai.nc</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Cookies publicitaires ou de tracking comportemental</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">5.3 Finalités du Traitement</h3>
                <p className="mb-2">Nous utilisons vos données pour :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li><strong>Fourniture du service</strong> : Permettre l'accès à votre compte et aux fonctionnalités</li>
                  <li><strong>Amélioration du service</strong> : Analyser l'utilisation pour améliorer LEIA et nos services</li>
                  <li><strong>Communication</strong> : Vous informer des mises à jour, nouvelles fonctionnalités</li>
                  <li><strong>Sécurité</strong> : Prévenir les fraudes et assurer la sécurité des systèmes</li>
                  <li><strong>Obligations légales</strong> : Répondre aux obligations légales et réglementaires</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">5.4 Base Légale du Traitement</h3>
                <p className="mb-2">Le traitement de vos données repose sur :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li><strong>Consentement</strong> : Acceptation des présentes conditions lors de l'inscription</li>
                  <li><strong>Exécution du contrat</strong> : Nécessaire pour fournir les services demandés</li>
                  <li><strong>Intérêt légitime</strong> : Amélioration de nos services, sécurité des systèmes</li>
                  <li><strong>Obligation légale</strong> : Conservation des données pour conformité légale</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">5.5 Destinataires des Données</h3>
                <p className="mb-4">Vos données personnelles sont accessibles uniquement aux entités suivantes :</p>

                <h4 className="text-lg font-medium text-foreground mb-2">5.5.1 Responsable de Traitement</h4>
                <div className="bg-card border border-border p-4 rounded-lg mb-4">
                  <p className="font-semibold">Baptiste FAURE - ZENKAI (gérant)</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Accès à</strong> : Emails, conversations LEIA, statistiques d'utilisation</li>
                    <li><strong>PAS d'accès à</strong> : Mots de passe (gérés par Supabase de façon irréversible)</li>
                    <li><strong>Finalité</strong> : Amélioration du service, support utilisateur, réponse aux demandes</li>
                  </ul>
                </div>

                <h4 className="text-lg font-medium text-foreground mb-2">5.5.2 Prestataires Techniques (Sous-traitants RGPD)</h4>
                <p className="mb-3">Tous nos prestataires sont sous contrat de confidentialité et conformes RGPD :</p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Prestataire d'authentification et base de données</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                      <li><strong>Service</strong> : Authentification et base de données</li>
                      <li><strong>Localisation</strong> : Union Européenne (région EU)</li>
                      <li><strong>Données traitées</strong> : Email, UUID, dates de connexion</li>
                      <li><strong>Certification</strong> : SOC 2 Type II, ISO 27001</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Prestataire d'infrastructure chatbot</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                      <li><strong>Service</strong> : Infrastructure chatbot LEIA</li>
                      <li><strong>Localisation</strong> : Union Européenne (région EU)</li>
                      <li><strong>Données traitées</strong> : Conversations complètes avec LEIA</li>
                      <li><strong>Certification</strong> : Conformité RGPD</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Prestataire d'hébergement web</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                      <li><strong>Service</strong> : Hébergement du site web zenkai.nc</li>
                      <li><strong>Localisation</strong> : Mondial avec CDN EU</li>
                      <li><strong>Données traitées</strong> : Logs de connexion, IP (anonymisée)</li>
                      <li><strong>Certification</strong> : SOC 2 Type II, conformité RGPD</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Prestataire de modèle d'intelligence artificielle</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                      <li><strong>Service</strong> : Modèle d'intelligence artificielle Claude (moteur de LEIA)</li>
                      <li><strong>Données traitées</strong> : Vos questions à LEIA (traitement en temps réel)</li>
                      <li><strong>Conservation</strong> : AUCUNE selon la politique Anthropic</li>
                      <li><strong>Note</strong> : Vos conversations ne sont PAS conservées par Anthropic, seulement par Botpress Cloud dans l'UE</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-medium text-foreground mb-2">5.5.3 Autorités Légales</h4>
                <p className="mb-2">Uniquement sur réquisition judiciaire ou demande légale impérative :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Police, gendarmerie (enquête pénale)</li>
                  <li>Tribunal (procédure judiciaire)</li>
                  <li>Autorités de régulation (CNIL, etc.)</li>
                </ul>
                <p className="mb-6">Nous informerons l'utilisateur concerné sauf interdiction légale.</p>

                <h4 className="text-lg font-medium text-foreground mb-2">5.5.4 Aucun Tiers Commercial</h4>
                <p className="mb-3">Nous ne vendons, ne louons et ne partageons JAMAIS vos données avec :</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Régies publicitaires</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Courtiers en données</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Partenaires marketing</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Réseaux sociaux (Facebook, Google, LinkedIn, etc.)</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Aucune autre entreprise à des fins commerciales</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">5.6 Transfert de Données</h3>
                <p className="mb-6">
                  Vos données sont hébergées et traitées dans l'Union Européenne (région EU) pour garantir la conformité RGPD. Nos prestataires (Netlify, Botpress) sont conformes RGPD et disposent de certifications appropriées.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3">5.7 Sécurité des Données</h3>
                <p className="mb-4">Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :</p>
                
                <p className="font-medium mb-2">Mesures techniques :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Chiffrement SSL/TLS (HTTPS) pour toutes les communications</li>
                  <li>Chiffrement des données sensibles en base de données</li>
                  <li>Authentification sécurisée (hachage bcrypt des mots de passe)</li>
                  <li>Protection contre les attaques DDOS</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                </ul>
                
                <p className="font-medium mb-2">Mesures organisationnelles :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Accès restreint aux données (principe du moindre privilège)</li>
                  <li>Authentification à deux facteurs (2FA) pour les accès administrateurs</li>
                  <li>Journalisation des accès aux données personnelles</li>
                  <li>Procédures de gestion des incidents de sécurité</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="conversations">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Conversations avec le Chatbot LEIA</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">6.1 Information Préalable</h3>
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-amber-700 dark:text-amber-400">⚠️ IMPORTANT : Toutes vos conversations avec LEIA sont enregistrées.</p>
                  <p className="mt-2">Avant votre première interaction avec LEIA, un message d'information vous est présenté clairement. En continuant à utiliser LEIA, vous consentez à l'enregistrement de vos conversations.</p>
                </div>

                <h3 className="text-xl font-medium text-foreground mb-3">6.2 Données Collectées</h3>
                <p className="mb-2">Lorsque vous échangez avec LEIA, nous enregistrons :</p>
                
                <p className="font-medium mb-2">Contenu complet :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Toutes vos questions posées à LEIA</li>
                  <li>Toutes les réponses générées par LEIA</li>
                  <li>Les éventuels retours/feedbacks (👍👎)</li>
                </ul>
                
                <p className="font-medium mb-2">Métadonnées techniques :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Date et heure de chaque message</li>
                  <li>Identifiant de conversation unique</li>
                  <li>Identifiant de session utilisateur (technique, anonyme)</li>
                  <li>Canal de communication (webchat)</li>
                  <li>Statut de la conversation (en cours, terminée, abandonnée)</li>
                </ul>
                
                <p className="font-medium mb-2">Informations personnelles mentionnées :</p>
                <p className="mb-6">Si vous mentionnez volontairement dans vos questions des informations personnelles (nom, entreprise, situation professionnelle), elles seront également enregistrées dans la conversation.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.3 Finalités de l'Enregistrement</h3>
                <p className="mb-2">Nous enregistrons vos conversations avec LEIA pour :</p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li><strong>Améliorer LEIA</strong> (finalité principale) : Analyser les questions fréquentes, identifier les lacunes de connaissances, détecter les réponses incorrectes ou imprécises, enrichir la base de connaissances juridiques</li>
                  <li><strong>Support utilisateur</strong> : Vous aider en cas de problème technique, répondre à vos demandes de clarification, retrouver l'historique de vos échanges</li>
                  <li><strong>Conformité et sécurité</strong> : Détecter les utilisations abusives du service, conserver une trace en cas de litige, répondre aux obligations légales de conservation</li>
                  <li><strong>Analyse statistique</strong> : Mesurer l'utilisation du chatbot, identifier les thématiques les plus demandées, calculer le taux de satisfaction</li>
                </ol>

                <h3 className="text-xl font-medium text-foreground mb-3">6.4 Qui a Accès à Vos Conversations ?</h3>
                
                <p className="font-medium mb-2">Accès complet aux conversations :</p>
                <div className="bg-card border border-border p-4 rounded-lg mb-4">
                  <p className="font-semibold">Baptiste FAURE (gérant de ZENKAI)</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Pourquoi</strong> : Amélioration du service, formation du bot, support utilisateur</li>
                    <li><strong>Garantie</strong> : Confidentialité professionnelle, pas de partage</li>
                  </ul>
                </div>
                
                <p className="font-medium mb-2">Accès technique (infrastructure) :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li><strong>Notre prestataire chatbot</strong> : Hébergement et stockage sécurisé des conversations (UE, RGPD)</li>
                  <li><strong>Notre prestataire IA</strong> : Traitement en temps réel uniquement, AUCUNE conservation</li>
                </ul>
                
                <p className="font-medium mb-2">AUCUN accès :</p>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Autres utilisateurs de ZENKAI</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Tiers commerciaux ou partenaires</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> Régies publicitaires</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">6.5 Durée de Conservation des Conversations</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Phase 1 : Conversations identifiables (90 jours)</p>
                    <p className="mt-2">Pendant <strong>3 mois</strong> après votre dernière conversation avec LEIA : conservation complète avec toutes les métadonnées, possibilité pour vous de demander une copie ou la suppression.</p>
                  </div>
                  
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Phase 2 : Anonymisation automatique (après 90 jours)</p>
                    <p className="mt-2">Après <strong>3 mois</strong> : suppression de l'identifiant de session utilisateur, suppression de toute donnée permettant de vous identifier, conservation du contenu anonymisé pour statistiques.</p>
                  </div>
                  
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Phase 3 : Suppression définitive (après 12 mois)</p>
                    <p className="mt-2">Après <strong>12 mois</strong> : suppression définitive et irréversible, aucune trace ne subsiste dans nos systèmes.</p>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                    <p className="font-semibold">Sur demande (immédiat)</p>
                    <p className="mt-2">Vous pouvez demander la suppression de vos conversations à tout moment. Délai de traitement : <strong>48 heures maximum</strong>. Procédure : Email à <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a></p>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-foreground mb-3">6.6 Base Légale du Traitement</h3>
                <p className="mb-2">Le traitement de vos conversations repose sur :</p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li><strong>Votre consentement explicite</strong> (Article 6.1.a RGPD) : Donné lors de la première utilisation de LEIA, révocable à tout moment</li>
                  <li><strong>Notre intérêt légitime</strong> (Article 6.1.f RGPD) : Amélioration continue du service LEIA, développement de nouvelles fonctionnalités</li>
                </ol>
                <p className="mb-6">Vous pouvez vous opposer à ce traitement à tout moment (voir section 8.6).</p>

                <h3 className="text-xl font-medium text-foreground mb-3">6.7 Vos Droits Spécifiques sur les Conversations</h3>
                <p className="mb-2">Au-delà des droits RGPD généraux (section 8), vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Droit d'accès</strong> : Obtenir une copie de toutes vos conversations avec LEIA (format JSON ou TXT, délai 30 jours max)</li>
                  <li><strong>Droit de suppression immédiate</strong> : Demander la suppression à tout moment (délai 48h max)</li>
                  <li><strong>Droit d'opposition</strong> : Cesser d'utiliser LEIA = fin de l'enregistrement</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">6.8 Anonymat et Protection de votre Vie Privée</h3>
                <p className="mb-2"><strong>Conversations anonymes par défaut :</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Vous apparaissez comme "Anonymous User" dans le système Botpress</li>
                  <li>Aucun nom, prénom ou identité directe n'est collecté automatiquement</li>
                  <li>Seul un identifiant technique est utilisé (pour regrouper vos conversations)</li>
                </ul>
                
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-amber-700 dark:text-amber-400">⚠️ Attention aux informations que vous partagez :</p>
                  <p className="mt-2">Si vous mentionnez volontairement votre nom, prénom, entreprise, des données sensibles ou des informations confidentielles, elles seront enregistrées dans la conversation.</p>
                </div>
                
                <p className="mb-2"><strong>Recommandation :</strong> Posez vos questions de manière générale sans mentionner d'informations personnelles inutiles.</p>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> "Quel est le délai de préavis pour un licenciement en Nouvelle-Calédonie ?"</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">❌</span> "Je suis Jean Dupont, gérant de Boulangerie du Centre, je veux licencier mon employé Marc Martin pour..."</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">6.9 Retrait du Consentement</h3>
                <p className="mb-2">Vous pouvez retirer votre consentement à l'enregistrement des conversations à tout moment :</p>
                
                <div className="space-y-4 mb-4">
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Option 1 : Cesser d'utiliser LEIA</p>
                    <p className="mt-2">Simple arrêt d'utilisation. Aucune nouvelle conversation ne sera enregistrée. Les conversations passées restent stockées selon la durée de conservation (90 jours).</p>
                  </div>
                  
                  <div className="bg-card border border-border p-4 rounded-lg">
                    <p className="font-semibold">Option 2 : Suppression + arrêt</p>
                    <p className="mt-2">Email à <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a> : "Je retire mon consentement et demande la suppression de mes conversations". Suppression sous 48h avec confirmation par email.</p>
                  </div>
                </div>
                
                <p className="text-sm"><strong>Conséquence du retrait :</strong> Le retrait du consentement ne remet pas en cause la licéité des traitements effectués avant le retrait.</p>
              </section>

              {/* Section 7 */}
              <section id="cookies">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies et Technologies Similaires</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">7.1 Qu'est-ce qu'un Cookie ?</h3>
                <p className="mb-6">Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">7.2 Cookies Utilisés sur zenkai.nc</h3>
                <p className="mb-3"><strong>Cookies strictement nécessaires (pas de consentement requis) :</strong></p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Cookie</th>
                        <th className="border border-border p-3 text-left">Durée</th>
                        <th className="border border-border p-3 text-left">Finalité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">session_token</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">Authentification et gestion de session</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">cookie_consent</td>
                        <td className="border border-border p-3">12 mois</td>
                        <td className="border border-border p-3">Mémorisation de vos préférences cookies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="mb-6"><strong>Cookies analytics (consentement requis) :</strong> Nous utilisons Netlify Analytics (pas de cookies tiers, pas de tracking inter-sites) pour mesurer l'audience de notre site.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">7.3 Gestion des Cookies</h3>
                <p className="mb-2">Vous pouvez à tout moment :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Modifier vos préférences via le lien "Gestion des cookies" en bas de page</li>
                  <li>Désactiver les cookies dans les paramètres de votre navigateur</li>
                </ul>
                <p className="text-sm mb-6">⚠️ La désactivation des cookies strictement nécessaires peut affecter le fonctionnement du service.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">7.4 Pas de Publicité Ciblée</h3>
                <p>ZENKAI n'utilise <strong>AUCUN cookie de publicité ciblée</strong> ou de tracking comportemental.</p>
              </section>

              {/* Section 8 */}
              <section id="droits-rgpd">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Vos Droits RGPD</h2>
                <p className="mb-6">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.1 Droit d'Accès</h3>
                <p className="mb-2">Vous avez le droit d'obtenir :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Confirmation que vos données sont traitées</li>
                  <li>Copie de vos données personnelles</li>
                  <li>Informations sur les traitements effectués</li>
                </ul>
                <p className="mb-6"><strong>Comment exercer ce droit :</strong> Email à <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a> avec objet : "Demande d'accès RGPD". Délai de réponse : 30 jours maximum.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.2 Droit de Rectification</h3>
                <p className="mb-2">Vous avez le droit de faire corriger vos données personnelles inexactes ou incomplètes.</p>
                <p className="mb-6"><strong>Comment exercer ce droit :</strong> Directement dans votre compte (modifier profil) ou par email à <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a></p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.3 Droit à l'Effacement ("Droit à l'oubli")</h3>
                <p className="mb-2">Vous avez le droit de demander la suppression de vos données personnelles.</p>
                <p className="mb-2"><strong>Comment exercer ce droit :</strong> Email à <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a> avec objet : "Suppression de mes données RGPD"</p>
                <p className="mb-2"><strong>Délai de traitement :</strong> 48 heures maximum pour les conversations chatbot, 7 jours pour les autres données</p>
                <p className="mb-6"><strong>Exceptions :</strong> Nous pouvons conserver certaines données si : obligation légale de conservation, exercice de droits en justice, motifs d'intérêt public.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.4 Droit à la Limitation du Traitement</h3>
                <p className="mb-6">Vous avez le droit de demander la limitation du traitement de vos données dans certains cas (contestation de l'exactitude, opposition au traitement, etc.).</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.5 Droit à la Portabilité</h3>
                <p className="mb-2">Vous avez le droit de recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.</p>
                <p className="mb-6"><strong>Comment exercer ce droit :</strong> Email à <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a> avec objet : "Portabilité de mes données RGPD". Format fourni : JSON ou CSV.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.6 Droit d'Opposition</h3>
                <p className="mb-6">Vous avez le droit de vous opposer au traitement de vos données pour des motifs légitimes. <strong>Opposition totale :</strong> Suppression de compte + données.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.7 Droit de Retirer le Consentement</h3>
                <p className="mb-6">Vous pouvez retirer votre consentement à tout moment pour les traitements basés sur le consentement (ex : conversations chatbot). Le retrait du consentement ne remet pas en cause la licéité des traitements effectués avant le retrait.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.8 Droit de Déposer une Plainte</h3>
                <p className="mb-2">Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une plainte auprès de l'autorité de contrôle compétente :</p>
                <p><strong>CNIL</strong> - Commission Nationale de l'Informatique et des Libertés</p>
              </section>

              {/* Section 9 */}
              <section id="limitation">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation de Responsabilité</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">9.1 Informations Générales</h3>
                <p className="mb-4">LEIA fournit des informations générales à titre informatif uniquement, basées sur le droit du travail et les procédures administratives de Nouvelle-Calédonie.</p>
                <p className="mb-2"><strong>Les réponses de LEIA ne constituent en aucun cas :</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Un conseil juridique personnalisé</li>
                  <li>Une consultation juridique</li>
                  <li>Une opinion juridique opposable</li>
                  <li>Une garantie d'exactitude ou d'exhaustivité</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">9.2 Absence de Relation Client-Avocat</h3>
                <p className="mb-6">L'utilisation de LEIA ne crée aucune relation client-avocat entre vous et ZENKAI ou Baptiste FAURE. Pour un conseil juridique adapté à votre situation spécifique, consultez un avocat qualifié.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">9.3 Décisions et Responsabilité</h3>
                <p className="mb-2">ZENKAI ne peut être tenue responsable :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Des décisions prises sur la base des informations fournies par LEIA</li>
                  <li>Des erreurs, inexactitudes ou omissions dans les réponses de LEIA</li>
                  <li>Des dommages directs ou indirects résultant de l'utilisation du service</li>
                  <li>Des interruptions de service ou dysfonctionnements techniques</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">9.4 Disponibilité du Service</h3>
                <p className="mb-2">ZENKAI s'efforce de maintenir le service accessible 24/7 mais ne garantit pas une disponibilité ininterrompue.</p>
                <p className="mb-2">Le service peut être temporairement indisponible pour :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Maintenance technique</li>
                  <li>Mise à jour du système</li>
                  <li>Cas de force majeure</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">9.5 Exactitude des Informations</h3>
                <p>ZENKAI s'efforce de maintenir les informations à jour mais ne garantit pas leur exactitude absolue. La réglementation du travail en Nouvelle-Calédonie peut évoluer. Il est de votre responsabilité de vérifier l'actualité des informations auprès de sources officielles.</p>
              </section>

              {/* Section 10 */}
              <section id="propriete">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Propriété Intellectuelle</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">10.1 Contenus ZENKAI</h3>
                <p className="mb-2">Tous les contenus du site zenkai.nc et de LEIA sont protégés par les droits de propriété intellectuelle :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Textes, graphismes, logos, icônes</li>
                  <li>Code source, bases de données</li>
                  <li>Structure et organisation du site</li>
                  <li>Réponses générées par LEIA (sauf vos questions)</li>
                </ul>
                <p className="mb-6">Ces contenus sont la propriété exclusive de ZENKAI ou de ses partenaires.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">10.2 Marques</h3>
                <p className="mb-6">"ZENKAI", "LEIA" et leurs logos sont des marques de ZENKAI. Toute utilisation non autorisée constitue une contrefaçon.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">10.3 Licence d'Utilisation</h3>
                <p className="mb-2">ZENKAI vous accorde une licence personnelle, non exclusive, non transférable et révocable pour :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Accéder au site et aux services</li>
                  <li>Utiliser LEIA à des fins personnelles ou professionnelles internes</li>
                </ul>
                <p className="mb-2"><strong>Cette licence ne vous autorise PAS à :</strong></p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Reproduire, copier ou dupliquer les contenus</li>
                  <li>Modifier, adapter ou créer des œuvres dérivées</li>
                  <li>Distribuer, vendre ou exploiter commercialement les contenus</li>
                  <li>Utiliser les contenus dans un autre produit ou service</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">10.4 Vos Contenus (Questions à LEIA)</h3>
                <p className="mb-2">Vous conservez tous les droits sur vos questions posées à LEIA.</p>
                <p>En utilisant LEIA, vous accordez à ZENKAI une licence mondiale, gratuite, non exclusive pour : traiter vos questions, analyser et améliorer le service, utiliser vos questions de manière anonymisée à des fins statistiques.</p>
              </section>

              {/* Section 11 */}
              <section id="modification">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modification des Conditions</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">11.1 Droit de Modification</h3>
                <p className="mb-6">ZENKAI se réserve le droit de modifier les présentes conditions générales d'utilisation et la politique de confidentialité à tout moment.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">11.2 Notification des Modifications</h3>
                <p className="mb-2">En cas de modification substantielle, vous serez informé par :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Email à votre adresse enregistrée</li>
                  <li>Notification lors de votre prochaine connexion</li>
                  <li>Bannière sur le site zenkai.nc</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">11.3 Acceptation des Modifications</h3>
                <p className="mb-2">Les modifications entreront en vigueur :</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li><strong>Modifications mineures</strong> : Dès leur publication</li>
                  <li><strong>Modifications substantielles</strong> : 30 jours après notification</li>
                </ul>
                <p className="mb-6">Votre utilisation continue du service après l'entrée en vigueur des modifications constitue votre acceptation.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">11.4 Refus des Modifications</h3>
                <p className="mb-2">Si vous n'acceptez pas les nouvelles conditions, vous pouvez :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cesser d'utiliser les services</li>
                  <li>Demander la suppression de votre compte dans les 30 jours suivant la notification</li>
                </ul>
              </section>

              {/* Section 12 */}
              <section id="droit-applicable">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Droit Applicable et Juridiction</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">12.1 Droit Applicable</h3>
                <p className="mb-2">Les présentes conditions sont régies par :</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>Le droit applicable en Nouvelle-Calédonie</li>
                  <li>Le droit français (subsidiairement)</li>
                  <li>Le RGPD (Règlement UE 2016/679)</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">12.2 Juridiction Compétente</h3>
                <p>En cas de litige relatif à l'interprétation ou l'exécution des présentes conditions, les parties s'efforceront de trouver une solution amiable. À défaut d'accord amiable dans un délai de 30 jours, le litige sera porté devant les tribunaux compétents de Nouméa, Nouvelle-Calédonie.</p>
              </section>

              {/* Section 13 */}
              <section id="contact">
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">13.1 Questions sur les Conditions</h3>
                <p className="mb-6">Pour toute question concernant les présentes conditions générales d'utilisation : <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a></p>

                <h3 className="text-xl font-medium text-foreground mb-3">13.2 Exercice de vos Droits RGPD</h3>
                <p className="mb-2">Pour exercer vos droits RGPD (accès, rectification, suppression, etc.) :</p>
                <p className="mb-2"><strong>Email :</strong> <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a></p>
                <p className="mb-2"><strong>Objet :</strong> "Demande RGPD - [Type de demande]"</p>
                <p className="mb-6"><strong>Délai de réponse :</strong> 30 jours maximum (ou 48h pour suppression de conversations chatbot)</p>

                <h3 className="text-xl font-medium text-foreground mb-3">13.3 Réclamation CNIL</h3>
                <p>En cas de litige concernant vos données personnelles : <strong>CNIL</strong> - Commission Nationale de l'Informatique et des Libertés</p>
              </section>

              {/* Récapitulatif */}
              <section className="bg-primary/10 border border-primary/30 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-4">📌 Récapitulatif de vos Engagements</h2>
                <p className="mb-4">En acceptant ces conditions, vous vous engagez à :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Utiliser ZENKAI et LEIA de manière légale et conforme</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Ne pas tenter de contourner les mesures de sécurité</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Comprendre que LEIA ne remplace pas un conseil juridique personnalisé</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Accepter l'enregistrement de vos conversations avec LEIA (90 jours, puis anonymisation)</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Respecter les droits de propriété intellectuelle de ZENKAI</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Maintenir la confidentialité de vos identifiants de connexion</li>
                </ul>
              </section>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-border space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Date de dernière mise à jour :</strong> 4 février 2026
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Version :</strong> 1.0
              </p>
              
              <div className="bg-card border border-border p-4 rounded-lg mt-6">
                <p className="font-semibold">ZENKAI</p>
                <p className="text-sm text-muted-foreground mt-2">Baptiste FAURE</p>
                <p className="text-sm text-muted-foreground">Email : <a href="mailto:contact@zenkai.nc" className="text-primary hover:underline">contact@zenkai.nc</a></p>
                <p className="text-sm text-muted-foreground">Site web : <a href="https://zenkai.nc" className="text-primary hover:underline">https://zenkai.nc</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
