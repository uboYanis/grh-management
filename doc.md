# Fiche Projet : Marketplace de Services Freelances

## 1. Titre du Projet
**ProTechLinker**

## 2. Contexte
Dans le monde actuel, de plus en plus de freelances et d'entreprises cherchent à se connecter rapidement et efficacement. Une plateforme dédiée peut faciliter cette connexion, permettant aux freelances de trouver des projets et aux entreprises de recruter facilement les talents dont elles ont besoin.

## 3. Objectifs du Projet
- Créer une plateforme en ligne qui met en relation des freelances et des entreprises.
- Améliorer l'expérience utilisateur pour les freelances et les entreprises.

## 4. Cibles Utilisateurs
- **Freelances** : Professionnels cherchant à offrir leurs services.
- **Entreprises** : Organismes cherchant à embaucher des freelances pour des projets spécifiques.

## 5. Fonctionnalités Clés
- **Pour les Freelances** :
    - Création de profil avec compétences, description et photo.
    - Recherche et filtrage de projets par catégories, compétences, budget et localisation.
    - Soumission de propositions personnalisées pour des projets.
    - Consultation et gestion des factures, avec suivi de leur état.
    - Évaluation des projets et des entreprises à travers un système d'avis.
    - Messagerie intégrée pour communiquer avec les entreprises.
    - Tableau de bord personnalisé affichant les projets en cours et les performances.

- **Pour les Entreprises** :
    - Création de profil entreprise avec informations et logo.
    - Publication de projets avec description, compétences requises et budget.
    - Consultation des propositions soumises par les freelances.
    - Évaluation des freelances à travers un système d'avis.
    - Gestion des factures envoyées par les freelances, avec historique des paiements.
    - Tableau de bord affichant les projets en cours et les statistiques de performance.
    - Système de notifications pour les nouvelles propositions et messages.

## 6. Technologies Utilisées
- **Backend** : Java avec Spring Boot pour le développement de l'API.
- **Frontend** : TypeScript avec (React ou Vue JS) pour l'interface utilisateur.
- **Base de Données** : MySQL ou PostgreSQL pour stocker les données des utilisateurs, projets et factures.
- **Autres Outils** : Git pour le contrôle de version, et Docker pour la conteneurisation des applications.

## 7. Diagramme de Classes
### Diagramme de Classes

```plantuml
@startuml

package "Marketplace" {
    
    class User {
        +String id
        +String name
        +String email
        +String password
        +String profilePicture
        +UserType userType
        +Date createdAt
        +Date updatedAt
        +void login()
        +void logout()
    }

    class Freelancer {
        +List<Skill> skills
        +double dailyRate
        +List<Proposal> proposals
        +void submitProposal(Project project)
        +void manageInvoices()
    }

    class Company {
        +String companyName
        +String companyDescription
        +List<Project> postedProjects
        +void postProject(Project project)
        +void reviewFreelancer(Freelancer freelancer)
        +void manageInvoices()
    }

    class Project {
        +String id
        +String title
        +String description
        +double budget
        +Date deadline
        +List<Skill> requiredSkills
        +List<Proposal> proposals
        +void addProposal(Proposal proposal)
        +void updateProject()
    }

    class Proposal {
        +String id
        +String message
        +double proposedBudget
        +Date submittedAt
        +Freelancer freelancer
        +Project project
        +void accept()
        +void reject()
    }

    class Skill {
        +String name
        +String description
    }

    class Invoice {
        +String id
        +double amount
        +Date dateIssued
        +Date dueDate
        +String status
        +Project project
        +Freelancer freelancer
        +Company company
        +void markAsPaid()
        +void generateInvoice()
    }

    class Review {
        +String id
        +int rating
        +String comment
        +Date createdAt
        +Company company
        +Freelancer freelancer
    }

    enum UserType {
        FREELANCER
        COMPANY
    }

    User <|-- Freelancer
    User <|-- Company
    Project "1" --> "*" Proposal : has
    Proposal "1" --> "1" Freelancer : submitted by
    Proposal "1" --> "1" Project : for
    Company "1" --> "*" Project : posts
    Company "1" --> "*" Review : writes
    Freelancer "1" --> "*" Review : receives
    Project "1" --> "*" Skill : requires
    Invoice "1" --> "1" Project : relates to
    Invoice "1" --> "1" Freelancer : issued to
    Invoice "1" --> "1" Company : billed by
}

@enduml
```

## 9. Gestion de Projet
- Méthodologie : Agile (Scrum) pour permettre des itérations rapides et un retour d'information continu.
- Outils : Utilisation de Trello ou Jira pour la gestion des tâches et de GitHub pour le contrôle de version.