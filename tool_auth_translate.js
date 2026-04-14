const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'pt'];
const translations = {
  en: {
    auth: {
      loginTitle: "Login to Equator",
      loginSubtitle: "Access your global services and track applications",
      registerTitle: "Create Account",
      registerSubtitle: "Join thousands of individuals bridging their future across continents.",
      emailPlaceholder: "your@email.com",
      passwordPlaceholder: "Password",
      firstNamePlaceholder: "First Name",
      lastNamePlaceholder: "Last Name",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      signInBtn: "Sign In",
      registerBtn: "Register Account",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      signInInstead: "Sign in instead",
      registerNow: "Register now",
      interestTitle: "I am interested in",
      returnHome: "Return to Home",
      agreeTerms: "By registering, you agree to our Terms of Service and Privacy Policy for global operations.",
      authenticating: "Authenticating...",
      creating: "Creating Account..."
    }
  },
  fr: {
    auth: {
      loginTitle: "Connexion à Equator",
      loginSubtitle: "Accédez à vos services mondiaux et suivez vos demandes",
      registerTitle: "Créer un Compte",
      registerSubtitle: "Rejoignez des milliers de personnes qui bâtissent leur avenir entre les continents.",
      emailPlaceholder: "votre@email.com",
      passwordPlaceholder: "Mot de passe",
      firstNamePlaceholder: "Prénom",
      lastNamePlaceholder: "Nom",
      rememberMe: "Se souvenir de moi",
      forgotPassword: "Mot de passe oublié ?",
      signInBtn: "Se Connecter",
      registerBtn: "Créer mon Compte",
      noAccount: "Vous n'avez pas de compte ?",
      hasAccount: "Vous avez déjà un compte ?",
      signInInstead: "Se connecter à la place",
      registerNow: "Inscrivez-vous maintenant",
      interestTitle: "Je suis intéressé par",
      returnHome: "Retour à l'Accueil",
      agreeTerms: "En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.",
      authenticating: "Authentification...",
      creating: "Création du compte..."
    }
  },
  pt: {
    auth: {
      loginTitle: "Entrar no Equator",
      loginSubtitle: "Aceda aos seus serviços globais e acompanhe as suas candidaturas",
      registerTitle: "Criar Conta",
      registerSubtitle: "Junte-se a milhares de indivíduos que constroem o seu futuro entre continentes.",
      emailPlaceholder: "seu@email.com",
      passwordPlaceholder: "Senha",
      firstNamePlaceholder: "Primeiro Nome",
      lastNamePlaceholder: "Último Nome",
      rememberMe: "Lembrar-me",
      forgotPassword: "Esqueceu a senha?",
      signInBtn: "Entrar",
      registerBtn: "Registar Conta",
      noAccount: "Não tem uma conta?",
      hasAccount: "Já tem uma conta?",
      signInInstead: "Entrar em vez disso",
      registerNow: "Registe-se agora",
      interestTitle: "Estou interessado em",
      returnHome: "Voltar ao Início",
      agreeTerms: "Ao registar-se, concorda com os nossos Termos de Serviço e Política de Privacidade.",
      authenticating: "Autenticando...",
      creating: "Criando Conta..."
    }
  }
};

locales.forEach(locale => {
  const filePath = path.join(__dirname, 'messages', `${locale}.json`);
  const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Merge new auth keys
  currentData.auth = translations[locale].auth;
  
  fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
});

console.log('Auth translations added successfully!');
