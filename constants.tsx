
import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Monitor, 
  Calculator, 
  FileText, 
  TrendingUp,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { ServiceItem, AdvantageItem } from './types';

export const CONTACT_INFO = {
  phones: ["693 198 552", "678 169 618", "690 808 346", "620 856 426"],
  email: "notecconsulting@gmail.com",
  location: "Douala, Cameroun"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "FISCALITE",
    icon: "Scale",
    items: [
      "Télédéclaration mensuelle et/ou annuelle des impôts et taxes",
      "Audit fiscal",
      "Constitution du dossier de création d'une entreprise",
      "Immatriculation des employés à la CNPS et préparation du DIPE",
      "Assistance à un éventuel contrôle fiscal"
    ]
  },
  {
    title: "COMPTABILITE",
    icon: "Calculator",
    items: [
      "Mise en place d'un système comptable",
      "Mise en place d'un manuel de procédure",
      "Travaux de fin d'exercice",
      "Préparation des états financiers et montage des DSF",
      "Gestion de la paie",
      "Gestion et suivi des opérations courantes",
      "Audit et contrôle"
    ]
  },
  {
    title: "CONSEIL EN GESTION ET FORMATION",
    icon: "TrendingUp",
    items: [
      "Technique d'optimisation des couts",
      "Technique d'optimisation fiscale",
      "Formation en secrétariat comptable, Pack SAGE, EXCEL, etc."
    ]
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    title: "Expérience approfondie",
    description: "Une expertise pointue dans le domaine de la gestion comptable et fiscale pour assurer la pérennité de votre entreprise.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Maîtrise de l'Acte Uniforme OHADA",
    description: "Analyse rigoureuse des textes et lois : code général des impôts, loi de finance et acte uniforme OHADA.",
    icon: <Scale className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Maîtrise des Logiciels",
    description: "Expertise sur SAGE, EXCEL, SAP, CEGID, PENNYLANE, SYLAE, QUICKBOOKS, ODOO et ERP personnalisés.",
    icon: <Monitor className="w-8 h-8 text-blue-600" />
  }
];
