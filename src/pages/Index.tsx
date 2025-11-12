import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const projects = [
    { id: 1, title: 'Городской парк', category: 'Ландшафт', year: '2024', image: '/placeholder.svg' },
    { id: 2, title: 'Жилой комплекс', category: 'Архитектура', year: '2023', image: '/placeholder.svg' },
    { id: 3, title: 'Культурный центр', category: 'Интерьер', year: '2023', image: '/placeholder.svg' },
    { id: 4, title: 'Офисное пространство', category: 'Дизайн среды', year: '2024', image: '/placeholder.svg' },
    { id: 5, title: 'Набережная', category: 'Благоустройство', year: '2022', image: '/placeholder.svg' },
    { id: 6, title: 'Выставочный зал', category: 'Интерьер', year: '2023', image: '/placeholder.svg' }
  ];

  const awards = [
    { year: '2024', title: 'Премия Архитектурного Союза', category: 'Лучший проект года' },
    { year: '2023', title: 'European Design Awards', category: 'Городская среда' },
    { year: '2023', title: 'International Architecture Award', category: 'Инновации в дизайне' },
    { year: '2022', title: 'Золотой Трезини', category: 'Ландшафтная архитектура' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">АС</div>
            <div className="hidden md:flex gap-8">
              {['projects', 'about', 'awards', 'contact'].map((section) => (
                <button key={section} onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}>
                  {section === 'projects' && 'Проекты'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'awards' && 'Награды'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-1 border-t border-border pt-4">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">2025</span>
            </div>
            <div className="col-span-12 md:col-span-11">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
                Архитектурная<br />среда и дизайн
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Создаю пространства, где геометрия встречается с функциональностью, а структура рождает гармонию.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="h-full grid grid-cols-12 gap-6 container mx-auto px-6">
          {Array.from({ length: 12 }).map((_, i) => <div key={i} className="border-l border-foreground" />)}
        </div>
      </div>

      {activeSection === 'projects' && (
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.id} className="group overflow-hidden border-border hover:border-primary transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Icon name="ArrowUpRight" size={32} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">{project.category}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-4 border-t border-border pt-4">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Обо мне</h2>
              </div>
              <div className="col-span-12 md:col-span-8 space-y-6">
                <p className="text-2xl leading-relaxed">
                  Дизайнер архитектурной среды с 10-летним опытом создания пространств, которые вдохновляют и функционируют.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Специализируюсь на проектировании городских пространств, общественных зданий и коммерческих интерьеров. 
                  Мой подход основан на балансе между эстетикой, функциональностью и устойчивым развитием.
                </p>
                <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Образование</h3>
                    <p className="font-medium">Московский Архитектурный Институт</p>
                    <p className="text-sm text-muted-foreground">Магистр архитектуры, 2014</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Специализация</h3>
                    <p className="font-medium">Архитектурная среда</p>
                    <p className="text-sm text-muted-foreground">Городские пространства, интерьеры</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'awards' && (
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-12 gap-6 mb-12">
              <div className="col-span-12 md:col-span-4 border-t border-border pt-4">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Награды</h2>
              </div>
            </div>
            <div className="space-y-1">
              {awards.map((award, index) => (
                <div key={index} className="grid grid-cols-12 gap-6 py-6 border-t border-border hover:bg-muted/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="col-span-12 md:col-span-2">
                    <span className="text-2xl font-bold">{award.year}</span>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                    <p className="text-muted-foreground">{award.category}</p>
                  </div>
                  <div className="col-span-12 md:col-span-4 flex items-center justify-end">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-12 gap-6 mb-12">
              <div className="col-span-12 md:col-span-4 border-t border-border pt-4">
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Контакты</h2>
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="text-2xl mb-8">Готов обсудить ваш проект</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Email</h3>
                  <a href="mailto:hello@architect.com" className="text-lg hover:text-primary transition-colors">
                    hello@architect.com
                  </a>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Телефон</h3>
                  <a href="tel:+79001234567" className="text-lg hover:text-primary transition-colors">
                    +7 900 123 45 67
                  </a>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Соцсети</h3>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="icon"><Icon name="Instagram" size={20} /></Button>
                    <Button variant="ghost" size="icon"><Icon name="Linkedin" size={20} /></Button>
                    <Button variant="ghost" size="icon"><Icon name="Mail" size={20} /></Button>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider text-muted-foreground">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider text-muted-foreground">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider text-muted-foreground">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте" className="bg-muted/50 min-h-32" />
                </div>
                <Button className="w-full" size="lg">
                  Отправить сообщение
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border mt-32 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Архитектурная студия. Все права защищены.</p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;