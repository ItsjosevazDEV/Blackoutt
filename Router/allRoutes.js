import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/menu", "Menu", "/pages/menu.html", []),
    new Route("/events", "Events", "/pages/events.html", []),
    new Route("/allResa", "Réservations", "/pages/reservations/allResa.html", ["client", "admin"]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"], "/js/auth/signup.js"), 
    new Route("/account", "Mon compte", "/pages/auth/account.html",["client",]),
    new Route("/editPassword", "Changement mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),

];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Blackout Lounge";
