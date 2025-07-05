// resources/js/Pages/Programas.tsx
import { ReactNode } from 'react';
import MainLayout from '@/layouts/Main/main-layout';
import React, { useState } from 'react';
import { 
  TreePine, 
  GraduationCap, 
  Recycle, 
  Droplets, 
  Users, 
  Calendar,
  MapPin,
  Target,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,



  Leaf,
 
  Lightbulb,
  HandHeart,
  Globe,
 
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Reflorestamento Urbano",
    category: "Meio Ambiente",
    status: "Em Andamento",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Plantio de árvores nativas em áreas urbanas degradadas de Itabira, promovendo a recuperação da biodiversidade local.",
    fullDescription: "O projeto de Reflorestamento Urbano visa recuperar áreas verdes degradadas na cidade de Itabira através do plantio de espécies nativas da Mata Atlântica. Já plantamos mais de 2.500 mudas em parceria com escolas e a comunidade local.",
    impact: "2.500+ árvores plantadas",
    beneficiaries: "15.000 pessoas",
    duration: "2020 - Presente",
    location: "Itabira - MG",
    partners: ["Prefeitura de Itabira", "Escola Municipal Verde", "Instituto Floresta Viva"],
    goals: [
      "Plantar 5.000 mudas até 2025",
      "Recuperar 10 hectares de área verde",
      "Envolver 50 escolas no projeto",
      "Capacitar 200 voluntários"
    ],
    gallery: [
      "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 2,
    title: "Educação Ambiental nas Escolas",
    category: "Educação",
    status: "Em Andamento",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Programa educativo que leva conhecimento sobre sustentabilidade e preservação ambiental para estudantes de todas as idades.",
    fullDescription: "Nosso programa de Educação Ambiental atende escolas públicas e privadas de Itabira, oferecendo workshops, palestras e atividades práticas sobre sustentabilidade, reciclagem e preservação do meio ambiente.",
    impact: "8.500+ estudantes alcançados",
    beneficiaries: "25 escolas",
    duration: "2015 - Presente",
    location: "Itabira e região",
    partners: ["Secretaria de Educação", "UNIFEI", "Colégio Objetivo"],
    goals: [
      "Alcançar 50 escolas até 2025",
      "Formar 100 professores multiplicadores",
      "Criar 30 hortas escolares",
      "Desenvolver material didático próprio"
    ],
    gallery: [
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 3,
    title: "Reciclagem Comunitária",
    category: "Sustentabilidade",
    status: "Concluído",
    image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Implementação de pontos de coleta seletiva em bairros de Itabira, promovendo a economia circular e geração de renda.",
    fullDescription: "O projeto Reciclagem Comunitária estabeleceu 15 pontos de coleta seletiva em diferentes bairros de Itabira, capacitou catadores locais e criou uma cooperativa de reciclagem que gera renda para 30 famílias.",
    impact: "120 toneladas recicladas",
    beneficiaries: "5.000 famílias",
    duration: "2018 - 2023",
    location: "Itabira - MG",
    partners: ["COMLURB", "Cooperativa ReciclaVida", "Banco do Brasil"],
    goals: [
      "✓ 15 pontos de coleta instalados",
      "✓ 30 famílias beneficiadas",
      "✓ Cooperativa criada e funcionando",
      "✓ 120 toneladas de material reciclado"
    ],
    gallery: [
      "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3735219/pexels-photo-3735219.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3735220/pexels-photo-3735220.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 4,
    title: "Preservação de Nascentes",
    category: "Recursos Hídricos",
    status: "Em Andamento",
    image: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Projeto de recuperação e preservação de nascentes na região de Itabira, garantindo a qualidade da água para as futuras gerações.",
    fullDescription: "Trabalhamos na identificação, recuperação e preservação de nascentes na região metropolitana de Itabira, implementando técnicas de conservação do solo e reflorestamento ciliar para garantir a qualidade e quantidade da água.",
    impact: "25 nascentes recuperadas",
    beneficiaries: "12.000 pessoas",
    duration: "2019 - Presente",
    location: "Região de Itabira",
    partners: ["COPASA", "IEF-MG", "Universidade Federal de Ouro Preto"],
    goals: [
      "Recuperar 50 nascentes até 2026",
      "Reflorestar 100 hectares de mata ciliar",
      "Capacitar 500 proprietários rurais",
      "Monitorar qualidade da água mensalmente"
    ],
    gallery: [
      "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1906659/pexels-photo-1906659.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1906660/pexels-photo-1906660.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 5,
    title: "Hortas Comunitárias",
    category: "Agricultura Urbana",
    status: "Em Andamento",
    image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Criação de hortas comunitárias em espaços urbanos ociosos, promovendo segurança alimentar e agricultura sustentável.",
    fullDescription: "O projeto Hortas Comunitárias transforma terrenos baldios em espaços produtivos, onde famílias cultivam alimentos orgânicos, aprendem técnicas de agricultura sustentável e fortalecem os laços comunitários.",
    impact: "12 hortas criadas",
    beneficiaries: "300 famílias",
    duration: "2021 - Presente",
    location: "Itabira - MG",
    partners: ["EMATER-MG", "Associação de Bairros", "Mercado Local"],
    goals: [
      "Criar 20 hortas até 2025",
      "Beneficiar 500 famílias",
      "Produzir 10 toneladas de alimentos/ano",
      "Formar 50 agricultores urbanos"
    ],
    gallery: [
      "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1301857/pexels-photo-1301857.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1301858/pexels-photo-1301858.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  },
  {
    id: 6,
    title: "Energia Solar Comunitária",
    category: "Energia Renovável",
    status: "Planejamento",
    image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Instalação de painéis solares em equipamentos públicos e residências de baixa renda, promovendo energia limpa e acessível.",
    fullDescription: "Projeto inovador que visa instalar sistemas de energia solar fotovoltaica em escolas, postos de saúde e residências de famílias de baixa renda, reduzindo custos com energia elétrica e promovendo sustentabilidade.",
    impact: "Projeto em planejamento",
    beneficiaries: "1.000 famílias (estimativa)",
    duration: "2025 - 2027",
    location: "Itabira - MG",
    partners: ["CEMIG", "Banco de Desenvolvimento", "Governo Estadual"],
    goals: [
      "Instalar 200 sistemas solares",
      "Reduzir 40% do gasto com energia",
      "Capacitar 100 técnicos locais",
      "Evitar emissão de 500 ton CO2/ano"
    ],
    gallery: [
      "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2800833/pexels-photo-2800833.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2800834/pexels-photo-2800834.jpeg?auto=compress&cs=tinysrgb&w=400"
    ]
  }
];

const categories = [
  { name: "Todos", icon: <Globe className="w-4 h-4" />, count: projects.length },
  { name: "Meio Ambiente", icon: <TreePine className="w-4 h-4" />, count: projects.filter(p => p.category === "Meio Ambiente").length },
  { name: "Educação", icon: <GraduationCap className="w-4 h-4" />, count: projects.filter(p => p.category === "Educação").length },
  { name: "Sustentabilidade", icon: <Recycle className="w-4 h-4" />, count: projects.filter(p => p.category === "Sustentabilidade").length },
  { name: "Recursos Hídricos", icon: <Droplets className="w-4 h-4" />, count: projects.filter(p => p.category === "Recursos Hídricos").length }
];

const stats = [
  { number: "150+", label: "Projetos Realizados", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "35k+", label: "Pessoas Impactadas", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "85%", label: "Taxa de Sucesso", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { number: "12", label: "Parceiros Ativos", icon: <HandHeart className="w-5 h-5 sm:w-6 sm:h-6" /> }
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em Andamento":
        return "bg-green-100 text-green-800";
      case "Concluído":
        return "bg-blue-100 text-blue-800";
      case "Planejamento":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Meio Ambiente":
        return <TreePine className="w-4 h-4" />;
      case "Educação":
        return <GraduationCap className="w-4 h-4" />;
      case "Sustentabilidade":
        return <Recycle className="w-4 h-4" />;
      case "Recursos Hídricos":
        return <Droplets className="w-4 h-4" />;
      case "Agricultura Urbana":
        return <Leaf className="w-4 h-4" />;
      case "Energia Renovável":
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <Target className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-green-100 rounded-full mb-4 sm:mb-6">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
              <span className="text-green-700 text-xs sm:text-sm font-medium">Transformando Itabira desde 2005</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Nossos <span className="text-green-600">Projetos</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Conheça as iniciativas que estão transformando Itabira em uma cidade mais sustentável, 
              verde e consciente. Cada projeto representa nosso compromisso com o futuro do planeta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                Seja um voluntário
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                Apoie nossos projetos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg mb-3 sm:mb-4">
                  <div className="text-green-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Explore por Categoria
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Filtre nossos projetos por área de atuação e descubra como estamos impactando diferentes setores
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  selectedCategory === category.name
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 sm:h-56 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      {getCategoryIcon(project.category)}
                      <span className="ml-1">{project.category}</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-4 sm:mb-6">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span>{project.beneficiaries} beneficiados</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base"
                  >
                    Ver detalhes
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-45" />
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                  {selectedProject.status}
                </span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                {getCategoryIcon(selectedProject.category)}
                <span className="ml-2 text-green-600 font-medium text-sm sm:text-base">{selectedProject.category}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">{selectedProject.fullDescription}</p>
              
              {/* Project Stats */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-green-600 mb-1">{selectedProject.impact}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Impacto Direto</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-blue-600 mb-1">{selectedProject.beneficiaries}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Beneficiários</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-purple-600 mb-1">{selectedProject.duration}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Duração</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-lg sm:text-xl font-bold text-orange-600 mb-1">{selectedProject.partners.length}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Parceiros</div>
                </div>
              </div>
              
              {/* Goals */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Objetivos e Metas</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.goals.map((goal, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Partners */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Parceiros</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.partners.map((partner, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Gallery */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Galeria do Projeto</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="w-full h-20 sm:h-24 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                  <Heart className="w-4 h-4 mr-2" />
                  Apoiar este projeto
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
                  <Users className="w-4 h-4 mr-2" />
                  Ser voluntário
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Faça Parte da Mudança
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 leading-relaxed px-2">
            Cada projeto que realizamos é possível graças ao apoio de pessoas como você. 
            Junte-se a nós e ajude a construir um futuro mais sustentável para Itabira.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-green-600 hover:bg-gray-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Heart className="w-4 h-4 mr-2" />
              Faça uma doação
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center text-sm sm:text-base">
              <Users className="w-4 h-4 mr-2" />
              Seja voluntário
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
ProjectsPage.layout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
