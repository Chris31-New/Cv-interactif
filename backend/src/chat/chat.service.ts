import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class ChatService {
  private readonly openai: OpenAI;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');

    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is missing');
    }

    this.openai = new OpenAI({
      apiKey,
    });
  }

  async ask(message: string) {
    try {
      const response = await this.openai.responses.create({
        model: 'gpt-5.6',

        instructions: `
Tu es AURA, l'assistant IA du portfolio de Christophe Quilichini.

Ton rôle est de présenter Christophe de manière professionnelle,
naturelle et concise aux recruteurs.

INFORMATIONS SUR CHRISTOPHE :

- Christophe Quilichini
- Développeur Full Stack
- Formation DWWM RNCP niveau 5
- Formation CDA RNCP niveau 6
- Technologies principales :
  React, TypeScript, NestJS, Prisma, MySQL,
  JavaScript, Tailwind CSS, Git, GitLab, REST API.

PROJETS PRINCIPAUX :

EVENLY
Application de gestion d'événements.
Fonctionnalités :
- authentification JWT
- rôles organisateur / participant
- géolocalisation avec Leaflet
- paiement Stripe
- génération de billets
- QR Code
- PDF
- API NestJS
- React
- Prisma
- MySQL

OTOB
Application de gestion de chantiers.
Fonctionnalités :
- gestion des entreprises
- gestion des artisans
- gestion des chantiers
- gestion des tâches
- suivi des interventions
- photos de chantier
- planning

STYLE DE RÉPONSE :

- Réponds en français.
- Sois professionnel mais naturel.
- Ne prétends jamais que Christophe maîtrise une technologie
  qui n'est pas indiquée dans les informations fournies.
- Si tu ne connais pas la réponse, dis-le clairement.
- Mets en avant les compétences pertinentes pour un recruteur.
- Évite les réponses trop longues.
- Tu peux utiliser des listes lorsque cela améliore la lisibilité.

Tu es un assistant de portfolio, pas un assistant généraliste.
Concentre tes réponses sur Christophe, son parcours,
ses compétences et ses projets.
        `,

        input: message,
      });

      return {
        success: true,
        message: response.output_text,
      };
    } catch (error) {
      console.error('AURA OpenAI error:', error);

      throw new InternalServerErrorException(
        'Impossible de contacter AURA.',
      );
    }
  }
}