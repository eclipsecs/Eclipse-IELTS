import { ArticleData } from '../types';

export const AVAILABLE_ARTICLES: ArticleData[] = [
  {
    id: 'article-1',
    title: 'The Future of Artificial Intelligence',
    author: 'Dr. Sarah Mitchell',
    source: 'Tech Science Journal',
    date: '2024',
    difficulty: 'Medium',
    readingTime: 8,
    content: `Artificial Intelligence (AI) has transformed from a futuristic concept into an integral part of our daily lives. From voice assistants like Siri and Alexa to recommendation algorithms on Netflix and Spotify, AI technologies have become ubiquitous. However, the most significant changes are yet to come.

The current wave of AI innovation, particularly in large language models and generative AI, has opened up unprecedented possibilities. These systems can now write essays, create images, write code, and even engage in complex conversations that seem remarkably human-like. This rapid advancement has sparked both excitement and concern across society.

Experts predict that AI will continue to evolve at an exponential rate. Within the next decade, we may see AI systems that can perform tasks that currently require human expertise, from medical diagnosis to legal research. This transformation could revolutionize industries ranging from healthcare to transportation.

However, this technological revolution also raises important questions about employment, privacy, and ethics. As AI systems become more capable, there are legitimate concerns about job displacement and the need for new workforce skills. Additionally, questions about data privacy, algorithmic bias, and the responsible use of AI remain critical issues that society must address.

Education systems are adapting to prepare students for an AI-dominated future. Rather than competing with AI, many educators now emphasize the importance of uniquely human skills such as creativity, critical thinking, and emotional intelligence. The goal is to create a workforce that can collaborate effectively with AI systems while contributing distinctly human value.

Governments worldwide are developing frameworks to regulate AI development and deployment. The European Union has already passed comprehensive AI legislation, while other countries are following suit. These regulations aim to ensure that AI technologies are developed responsibly and benefit society as a whole.

The future of AI is not predetermined. It will be shaped by the choices we make today about research priorities, ethical guidelines, and policy frameworks. As we stand at this crossroads, it is essential that we approach AI development with both optimism about its potential benefits and caution about its risks.

Despite the challenges, the potential benefits of AI are enormous. From solving climate change to discovering new medicines, AI could help address some of humanity's most pressing challenges. The key is to ensure that these powerful technologies are developed in ways that benefit everyone, not just a privileged few.

In conclusion, AI represents one of the most significant technological transformations in human history. As we navigate this new landscape, we must strive to harness its potential while carefully managing its risks. The decisions we make now will shape the relationship between humans and AI for generations to come.`,
    vocabulary: [
      {
        id: 1,
        word: 'ubiquitous',
        partOfSpeech: 'adjective',
        definition: 'present, appearing, or found everywhere',
        example: 'Smartphones have become ubiquitous in modern society.',
        synonyms: ['omnipresent', 'pervasive', 'everywhere'],
        antonyms: ['rare', 'scarce']
      },
      {
        id: 2,
        word: 'exponential',
        partOfSpeech: 'adjective',
        definition: 'increasing or growing at a rapidly increasing rate',
        example: 'The company saw exponential growth in its user base.',
        synonyms: ['rapid', 'accelerating', 'geometric'],
        antonyms: ['linear', 'gradual']
      },
      {
        id: 3,
        word: 'algorithm',
        partOfSpeech: 'noun',
        definition: 'a set of rules to be followed in calculations or other problem-solving operations',
        example: 'The streaming service uses a sophisticated recommendation algorithm.',
        synonyms: ['formula', 'procedure', 'method']
      },
      {
        id: 4,
        word: 'displacement',
        partOfSpeech: 'noun',
        definition: 'the move from one place to another, or the act of causing something to move',
        example: 'Industrial automation has led to job displacement in many sectors.',
        synonyms: ['movement', 'relocation', 'transfer']
      },
      {
        id: 5,
        word: 'ethical',
        partOfSpeech: 'adjective',
        definition: 'relating to moral principles or the branch of knowledge dealing with these',
        example: 'Companies face ethical questions about how they use customer data.',
        synonyms: ['moral', 'principled', 'right'],
        antonyms: ['unethical', 'immoral']
      },
      {
        id: 6,
        word: 'framework',
        partOfSpeech: 'noun',
        definition: 'a basic structure underlying a system, concept, or text',
        example: 'The government has established a regulatory framework for AI technology.',
        synonyms: ['structure', 'system', 'foundation']
      },
      {
        id: 7,
        word: 'predetermined',
        partOfSpeech: 'adjective',
        definition: 'decided in advance',
        example: 'The outcome was not predetermined; it depended on our choices.',
        synonyms: ['preordained', 'foreordained', 'set'],
        antonyms: ['undetermined', 'open']
      },
      {
        id: 8,
        word: 'transformative',
        partOfSpeech: 'adjective',
        definition: 'causing a marked change in someone or something',
        example: 'The internet had a transformative effect on communication.',
        synonyms: ['revolutionary', 'groundbreaking', 'radical']
      }
    ],
    practice: [
      {
        id: 1,
        type: 'multiple_choice',
        text: 'According to the article, which of the following is NOT mentioned as a concern about AI?',
        options: [
          { label: 'Job displacement', value: 'A' },
          { label: 'Data privacy', value: 'B' },
          { label: 'Environmental impact', value: 'C' },
          { label: 'Algorithmic bias', value: 'D' }
        ],
        correctAnswer: 'C',
        explanation: 'The article mentions job displacement, data privacy, and algorithmic bias as concerns, but does not discuss environmental impact.',
        points: 2
      },
      {
        id: 2,
        type: 'true_false',
        text: 'The article suggests that AI will completely replace human workers in the future.',
        options: [
          { label: 'True', value: 'true' },
          { label: 'False', value: 'false' }
        ],
        correctAnswer: 'false',
        explanation: 'The article suggests that education should focus on uniquely human skills that complement AI, not that AI will completely replace humans.',
        points: 1
      },
      {
        id: 3,
        type: 'fill_gap',
        text: 'The European Union has passed comprehensive ______ legislation for AI.',
        correctAnswer: ['AI', 'artificial intelligence'],
        explanation: 'The article mentions that the EU has passed comprehensive AI legislation.',
        points: 1
      },
      {
        id: 4,
        type: 'multiple_choice',
        text: 'What does the article identify as the key to benefiting from AI?',
        options: [
          { label: 'Developing faster computers', value: 'A' },
          { label: 'Hiring more AI researchers', value: 'B' },
          { label: 'Ensuring responsible development', value: 'C' },
          { label: 'Limiting AI to specific industries', value: 'D' }
        ],
        correctAnswer: 'C',
        explanation: 'The article emphasizes that the key is to ensure AI is developed responsibly and benefits society as a whole.',
        points: 2
      },
      {
        id: 5,
        type: 'short_answer',
        text: 'According to the article, what three uniquely human skills should education emphasize for the AI future?',
        correctAnswer: ['creativity', 'critical thinking', 'emotional intelligence'],
        points: 3
      },
      {
        id: 6,
        type: 'summary',
        text: 'Write a brief summary (2-3 sentences) of the main points discussed in the article about the future of AI.',
        correctAnswer: 'summary',
        points: 4
      }
    ]
  },
  {
    id: 'article-2',
    title: 'Climate Change and Ocean Ecosystems',
    author: 'Prof. James Chen',
    source: 'Marine Biology Today',
    date: '2024',
    difficulty: 'Medium',
    readingTime: 10,
    content: `The world's oceans are facing unprecedented challenges from climate change. As global temperatures rise, our oceans absorb approximately 90% of the excess heat, leading to widespread consequences for marine ecosystems. This phenomenon, known as ocean warming, has far-reaching effects that extend far beyond the water's surface.

Coral reefs, often called the "rainforests of the sea," are particularly vulnerable to warming waters. When ocean temperatures rise by just 1-2 degrees Celsius above normal, corals experience stress and expel the symbiotic algae that provide them with nutrients and their vibrant colors. This process, known as coral bleaching, has affected reefs worldwide. If bleaching events occur too frequently, corals cannot recover and eventually die.

The loss of coral reefs would be catastrophic for marine biodiversity. These ecosystems support approximately 25% of all marine species, despite covering less than 1% of the ocean floor. Reefs also provide essential services to human communities, including coastal protection, fishing grounds, and tourism revenue. The economic value of coral reefs is estimated at trillions of dollars annually.

Beyond coral reefs, ocean warming affects marine life in numerous ways. Many fish species are migrating toward the poles in search of cooler waters, disrupting traditional fishing grounds and ecosystem dynamics. Some marine species are changing their breeding patterns, while others are struggling to adapt to rapidly changing conditions.

Ocean acidification is another consequence of increased atmospheric carbon dioxide. As the oceans absorb CO2, they become more acidic, which makes it difficult for shell-forming organisms like oysters, clams, and some plankton species to build and maintain their shells. This has cascading effects throughout the marine food web.

Marine protected areas have emerged as a crucial tool for helping ecosystems adapt to climate change. By reducing other stressors such as overfishing and pollution, protected areas give marine life a better chance to cope with changing conditions. Scientists recommend protecting at least 30% of the ocean by 2030 to give ecosystems space to recover and adapt.

Individual actions can also make a difference. Reducing carbon footprints, supporting sustainable seafood choices, and advocating for climate policies all contribute to ocean conservation. Educational programs help raise awareness about the connections between daily choices and ocean health.

Research efforts are intensifying to better understand and protect marine ecosystems. Scientists are developing heat-resistant coral strains, exploring assisted migration strategies, and working to restore damaged reef systems. While these efforts show promise, researchers emphasize that the most effective solution remains reducing greenhouse gas emissions.

The outlook for ocean ecosystems depends largely on our collective action in the coming decades. Without significant reductions in carbon emissions, scientists warn that most coral reefs could be lost by mid-century. This would represent not only an environmental tragedy but also a profound loss of biodiversity and natural heritage.

International cooperation is essential for ocean conservation. Climate change knows no borders, and effective solutions require coordinated action by all nations. Agreements like the Paris Climate Accord provide frameworks for addressing this global challenge, though many argue that current commitments are insufficient.

The health of our oceans is inextricably linked to human wellbeing. From regulating climate to providing food and livelihoods, oceans support billions of people worldwide. Protecting marine ecosystems is not just an environmental imperative but a social and economic necessity as well.`,
    vocabulary: [
      {
        id: 1,
        word: 'unprecedented',
        partOfSpeech: 'adjective',
        definition: 'never done or known before',
        example: 'The country faced unprecedented economic challenges.',
        synonyms: ['unparalleled', 'unmatched', 'record-breaking'],
        antonyms: ['precedented', 'common']
      },
      {
        id: 2,
        word: 'symbiotic',
        partOfSpeech: 'adjective',
        definition: 'involving interaction between two different organisms living in close association',
        example: 'The symbiotic relationship between corals and algae is essential for reef health.',
        synonyms: ['mutualistic', 'cooperative', 'interdependent']
      },
      {
        id: 3,
        word: 'catastrophic',
        partOfSpeech: 'adjective',
        definition: 'involving or causing sudden great damage or suffering',
        example: 'The catastrophic earthquake destroyed the entire city.',
        synonyms: ['disastrous', 'devastating', 'calamitous'],
        antonyms: ['beneficial', 'fortunate']
      },
      {
        id: 4,
        word: 'cascading',
        partOfSpeech: 'adjective',
        definition: 'occurring as a part of a series of interconnected events or processes',
        example: 'The economic crisis triggered cascading effects throughout the financial system.',
        synonyms: ['ripple', 'knock-on', 'domino']
      },
      {
        id: 5,
        word: 'mitigation',
        partOfSpeech: 'noun',
        definition: 'the action of reducing the severity, seriousness, or painfulness of something',
        example: 'Climate mitigation strategies aim to reduce greenhouse gas emissions.',
        synonyms: ['reduction', 'alleviation', 'abatement'],
        antonyms: ['aggravation', 'exacerbation']
      }
    ],
    practice: [
      {
        id: 1,
        type: 'multiple_choice',
        text: 'What percentage of excess heat do the oceans absorb according to the article?',
        options: [
          { label: '50%', value: 'A' },
          { label: '75%', value: 'B' },
          { label: '90%', value: 'C' },
          { label: '100%', value: 'D' }
        ],
        correctAnswer: 'C',
        explanation: 'The article states that oceans absorb approximately 90% of excess heat from global warming.',
        points: 1
      },
      {
        id: 2,
        type: 'true_false',
        text: 'Coral bleaching occurs when water temperatures drop significantly below normal.',
        correctAnswer: 'false',
        explanation: 'Coral bleaching occurs when water temperatures rise 1-2 degrees above normal, not when they drop.',
        points: 1
      },
      {
        id: 3,
        type: 'fill_gap',
        text: 'Marine protected areas help ecosystems adapt by reducing other stressors such as overfishing and ______.',
        correctAnswer: ['pollution'],
        points: 1
      },
      {
        id: 4,
        type: 'multiple_choice',
        text: 'What percentage of marine species do coral reefs support?',
        options: [
          { label: '10%', value: 'A' },
          { label: '25%', value: 'B' },
          { label: '50%', value: 'C' },
          { label: '75%', value: 'D' }
        ],
        correctAnswer: 'B',
        explanation: 'The article states that coral reefs support approximately 25% of all marine species.',
        points: 2
      }
    ]
  },
  {
    id: 'article-3',
    title: 'The Rise of Remote Work',
    author: 'Emma Thompson',
    source: 'Business Weekly',
    date: '2024',
    difficulty: 'Easy',
    readingTime: 6,
    content: `Remote work has fundamentally transformed the modern workplace. What began as a necessity during the pandemic has evolved into a permanent fixture of the professional landscape. Companies worldwide are now rethinking their approaches to workspace, employee flexibility, and organizational culture.

The benefits of remote work are numerous and well-documented. Employees enjoy greater flexibility, reduced commuting time, and improved work-life balance. Studies show that remote workers often report higher job satisfaction and productivity levels compared to their office-based counterparts. Without the constraints of a traditional 9-to-5 schedule, many workers find they can structure their days to maximize their personal peak performance times.

From an employer's perspective, remote work offers significant cost savings. Companies can reduce expenses related to office space, utilities, and maintenance. Some organizations have even abandoned physical offices entirely, transitioning to fully distributed workforces. This shift has opened up talent pools that were previously inaccessible, allowing companies to hire the best candidates regardless of geographical location.

However, remote work is not without its challenges. Communication and collaboration can suffer without face-to-face interaction. Many workers report feelings of isolation and disconnection from their colleagues. Building company culture and maintaining team cohesion require deliberate effort and creative solutions in virtual environments.

The hybrid work model has emerged as a popular compromise. This approach combines the flexibility of remote work with the structure of in-office time. Most companies adopting this model ask employees to come into the office two or three days per week, reserving the remaining days for remote work. This arrangement allows for face-to-face collaboration while still providing flexibility.

Technology has been the key enabler of the remote work revolution. Video conferencing platforms, project management tools, and cloud-based collaboration software have made it possible for teams to work together effectively from anywhere in the world. As these technologies continue to improve, the barriers between remote and in-office work are becoming increasingly blurred.

Looking to the future, experts predict that remote work will continue to evolve. Some predict a move toward asynchronous work, where team members in different time zones can contribute without needing to be online simultaneously. Others foresee the emergence of entirely new workspace models that we cannot yet imagine.

The impact of remote work extends beyond individual companies and workers. Urban planning, transportation systems, and commercial real estate are all being affected by this shift. Some cities are experiencing decreased demand for office space, while suburban and rural areas are seeing increased population as workers relocate to more affordable or desirable locations.

Not all industries have been equally affected by the remote work revolution. While knowledge workers in tech, finance, and professional services have largely transitioned to remote or hybrid models, many essential workers continue to perform their jobs on-site. This divide has raised important questions about workplace equity and the future of work for different sectors.

To be successful in a remote work environment, employees need to develop strong self-discipline and communication skills. Setting clear boundaries between work and personal life becomes crucial when home serves as the workplace. Managers must learn to measure outcomes rather than activity, trusting their teams to deliver results without direct supervision.`,
    vocabulary: [
      {
        id: 1,
        word: 'distributed',
        partOfSpeech: 'adjective',
        definition: 'spread over a wide area or among a large number of people',
        example: 'The company operates as a distributed workforce across multiple countries.',
        synonyms: ['dispersed', 'spread out', 'decentralized'],
        antonyms: ['centralized', 'concentrated']
      },
      {
        id: 2,
        word: 'asynchronous',
        partOfSpeech: 'adjective',
        definition: 'not occurring at the same time',
        example: 'Asynchronous communication allows team members to contribute at different times.',
        synonyms: ['non-simultaneous', 'out of sync'],
        antonyms: ['synchronous', 'simultaneous']
      },
      {
        id: 3,
        word: 'cohesion',
        partOfSpeech: 'noun',
        definition: 'the action or fact of forming a united whole',
        example: 'Team cohesion was challenged by the transition to remote work.',
        synonyms: ['unity', 'solidarity', 'togetherness'],
        antonyms: ['division', 'discord']
      }
    ],
    practice: [
      {
        id: 1,
        type: 'multiple_choice',
        text: 'What does the article identify as a key advantage of remote work for employers?',
        options: [
          { label: 'Increased supervision', value: 'A' },
          { label: 'Cost savings', value: 'B' },
          { label: 'Longer working hours', value: 'C' },
          { label: 'Reduced technology needs', value: 'D' }
        ],
        correctAnswer: 'B',
        explanation: 'The article mentions that remote work offers significant cost savings for employers.',
        points: 1
      },
      {
        id: 2,
        type: 'true_false',
        text: 'The article suggests that all industries have equally embraced remote work.',
        correctAnswer: 'false',
        explanation: 'The article notes that essential workers and some sectors cannot work remotely, creating a divide.',
        points: 1
      }
    ]
  }
];
