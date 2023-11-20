function authenticateEtudiant(req, res, next) {
    if (req.role === 0 && req.isAuthenticated) {
      next(); 
    } else {
      res.status(401).json({ message: "Accès non autorisé pour les étudiants" });
    }
  }
  
  function authenticateGestionnaire(req, res, next) {
    if (req.role === 1 && req.isAuthenticated) {
      next();
    } else {
      res.status(401).json({ message: "Accès non autorisé pour les gestionnaires" });
    }
  }
  