import React, { useState, useEffect } from 'react';
import { 
  Clock, Trophy, Tv, Newspaper, Share2, Bookmark, Search, ChevronLeft, Bell, 
  TrendingUp, Flame, Calendar, Globe, MapPin, ChevronRight, ExternalLink, 
  Home, ShieldCheck, Lock, Trash2, LogOut, X
} from 'lucide-react';

// 🏆 LOGO HIGH-FIDELITY SVG (Fidèle à l'image fournie : Étoile Zellij Or/Vert, Ballon & Traînée Drapeau du Maroc)
const Logo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#854d0e" />
      </linearGradient>
      <linearGradient id="greenRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#059669" />
        <stop offset="100%" stopColor="#064e3b" />
      </linearGradient>
      <linearGradient id="morocRed" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#991b1b" />
      </linearGradient>
      <radialGradient id="ballShade" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="65%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </radialGradient>
      <filter id="glowEffect" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="1.2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g clipPath="url(#leftClip)">
      <path d="M 50 10 L 37.5 22.5 L 20 20 L 22.5 37.5 L 10 50 L 22.5 62.5 L 20 80 L 37.5 77.5 L 50 90 Z" fill="url(#goldLeft)" stroke="#020617" strokeWidth="0.8" />
    </g>
    <g clipPath="url(#rightClip)">
      <path d="M 50 10 L 62.5 22.5 L 80 20 L 77.5 37.5 L 90 50 L 77.5 62.5 L 80 80 L 62.5 77.5 L 50 90 Z" fill="url(#greenRight)" stroke="#020617" strokeWidth="0.8" />
    </g>

    <clipPath id="leftClip"><rect x="0" y="0" width="50.2" height="100" /></clipPath>
    <clipPath id="rightClip"><rect x="49.8" y="0" width="50.2" height="100" /></clipPath>

    <circle cx="50" cy="50" r="32" fill="#020617" stroke="url(#goldLeft)" strokeWidth="1" />

    <g opacity="0.35" stroke="#10b981" strokeWidth="0.6">
      <rect x="23" y="23" width="54" height="54" transform="rotate(15 50 50)" />
      <rect x="23" y="23" width="54" height="54" transform="rotate(30 50 50)" />
      <rect x="23" y="23" width="54" height="54" transform="rotate(45 50 50)" />
      <rect x="23" y="23" width="54" height="54" transform="rotate(60 50 50)" />
    </g>

    <circle cx="50" cy="50" r="22" fill="url(#ballShade)" stroke="#020617" strokeWidth="1.2" />
    <g stroke="#020617" strokeWidth="1.2" fill="#0f172a" strokeLinejoin="round">
      <polygon points="50,44 57,49 54,57 46,57 43,49" />
      <line x1="50" y1="44" x2="50" y2="33" />
      <polygon points="45,28 55,28 57,33 43,33" />
      <line x1="57" y1="49" x2="66" y2="45" />
      <polygon points="69,39 72,45 66,45" />
      <line x1="54" y1="57" x2="61" y2="66" />
      <polygon points="61,66 68,64 64,71" />
      <line x1="46" y1="57" x2="39" y2="66" />
      <polygon points="39,66 32,64 36,71" />
      <line x1="43" y1="49" x2="34" y2="45" />
      <polygon points="31,39 28,45 34,45" />
    </g>

    <path d="M 22,54 Q 37,58 47,54 Q 57,50 63,45 Q 52,56 37,58 Q 26,56 22,54 Z" fill="#059669" />
    <path d="M 25,57 Q 38,61 49,57 Q 59,52 65,47 Q 54,59 39,61 Q 28,59 25,57 Z" fill="url(#morocRed)" filter="url(#glowEffect)" />
    <path d="M 19,51 Q 34,55 45,52 Q 55,48 60,43 Q 50,53 34,55 Q 24,53 19,51 Z" fill="#ffffff" />
  </svg>
);

const AdSenseSlot = ({ adSlot, adFormat = "auto", fullWidthResponsive = "true" }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {}
  }, []);

  return (
    <div className="my-4 p-2 bg-slate-900/60 rounded-xl border border-slate-800/80 text-center relative overflow-hidden">
      <span className="text-[9px] text-slate-500 block mb-1 uppercase tracking-widest">إعلان ممول</span>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" 
           data-ad-slot={adSlot}
           data-ad-format={adFormat}
           data-full-width-responsive={fullWidthResponsive}></ins>

      <div className="py-5 px-4 border border-dashed border-slate-800 rounded-lg flex flex-col items-center justify-center bg-slate-950/40">
        <span className="text-xs text-slate-400 font-bold">كووورة مغربية ADS</span>
        <p className="text-[10px] text-slate-600 mt-1">مساحة إعلانية مميزة</p>
      </div>
    </div>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [news, setNews] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);

  // --- 🔒 CONFIGURATION ADMINISTRATION CMS LOCAL ---
  const [showAdminLogin, setShowAdminModal] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminError, setAdminError] = useState('');
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const [newMatch, setNewMatch] = useState({ home_team: '', away_team: '', score_home: 0, score_away: 0, status: 'upcoming', match_time: '00:00', league_name: 'الدوري المغربي' });
  const [newArticle, setNewArticle] = useState({ title: '', content: '', category: 'البطولة الاحترافية', origin: 'maroc', image_url: '', source: 'كووورة مغربية' });

  const ADMIN_CREDENTIALS = {
    email: "admin@koooramoroc.ma",
    password: "AdminKooora2030!"
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedSession = localStorage.getItem('is_admin_logged_in');
    if (savedSession === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminEmail === ADMIN_CREDENTIALS.email && adminPassword === ADMIN_CREDENTIALS.password) {
      setIsAdminLoggedIn(true);
      localStorage.setItem('is_admin_logged_in', 'true');
      setShowAdminModal(false);
      setShowAdminPanel(true);
      setAdminError('');
    } else {
      setAdminError('البريد الإلكتروني أو كلمة المرور خاطئة !');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('is_admin_logged_in');
    setShowAdminPanel(false);
  };

  const defaultMatches = [
    { id: 1, home_team: "الوداد الرياضي", away_team: "الرجاء الرياضي", score_home: 1, score_away: 2, status: "live", match_time: "82'", league_name: "الدوري المغربي للمحترفين", source_site: "Hesport Live" },
    { id: 2, home_team: "برشلونة", away_team: "ريال مدريد", score_home: 0, score_away: 0, status: "upcoming", match_time: "21:00", league_name: "الدوري الإسباني", source_site: "Goal API" },
    { id: 3, home_team: "الجيش الملكي", away_team: "نهضة بركان", score_home: 3, score_away: 1, status: "finished", match_time: "نهاية المباراة", league_name: "الدوري المغربي للمحترفين", source_site: "Hesport Live" }
  ];

  const FEEDS = {
    maroc: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.hesport.com%2Ffeed",
    monde: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.goal.com%2Far%2Ffeeds%2Fnews"
  };

  useEffect(() => {
    const loadRealtimeData = async () => {
      setLoading(true);
      try {
        const localMatches = localStorage.getItem('admin_matches');
        let currentMatches = localMatches ? JSON.parse(localMatches) : defaultMatches;
        setMatches(currentMatches);

        let fetchedArticles = [];
        const localArticles = localStorage.getItem('admin_articles');
        const customArticles = localArticles ? JSON.parse(localArticles) : [];

        if (activeTab === 'home') {
          const [resMaroc, resMonde] = await Promise.all([
            fetch(FEEDS.maroc),
            fetch(FEEDS.monde)
          ]);
          
          let itemsMaroc = [];
          let itemsMonde = [];
          
          if (resMaroc.ok) {
            const data = await resMaroc.json();
            itemsMaroc = data.items.slice(0, 5).map(item => formatRSSItem(item, 'maroc'));
          }
          if (resMonde.ok) {
            const data = await resMonde.json();
            itemsMonde = data.items.slice(0, 5).map(item => formatRSSItem(item, 'monde'));
          }
          
          fetchedArticles = [...customArticles, ...itemsMaroc, ...itemsMonde];
        } else if (activeTab === 'maroc' || activeTab === 'monde') {
          const response = await fetch(FEEDS[activeTab]);
          if (response.ok) {
            const data = await response.json();
            fetchedArticles = data.items.map(item => formatRSSItem(item, activeTab));
          }
          const filteredCustom = customArticles.filter(art => art.origin === activeTab);
          fetchedArticles = [...filteredCustom, ...fetchedArticles];
        }

        setNews(fetchedArticles);
      } catch (e) {
        console.error("Échec du chargement", e);
      } finally {
        setLoading(false);
      }
    };

    loadRealtimeData();
  }, [activeTab]);

  const formatRSSItem = (item, type) => {
    let imageUrl = item.thumbnail || item.enclosure?.link || "";
    if (!imageUrl && item.description) {
      const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch) imageUrl = imgMatch[1];
    }
    if (!imageUrl) {
      imageUrl = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800";
    }

    return {
      id: item.guid || `rss-${type}-${Math.random()}`,
      title: item.title,
      content: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 400) + "..." : "تفاصيل الخبر متوفرة عبر الرابط الأصلي للمصدر.",
      category: item.categories?.[0] || (type === 'maroc' ? "كرة مغربية" : "كرة عالمية"),
      source: type === 'maroc' ? "Hesport" : "Goal Arabic",
      image_url: imageUrl,
      published_at: item.pubDate || new Date().toISOString(),
      link: item.link || "#"
    };
  };

  const saveNewMatch = (e) => {
    e.preventDefault();
    const updated = [...matches, { ...newMatch, id: Date.now(), source_site: 'Admin Panel' }];
    setMatches(updated);
    localStorage.setItem('admin_matches', JSON.stringify(updated));
    setNewMatch({ home_team: '', away_team: '', score_home: 0, score_away: 0, status: 'upcoming', match_time: '00:00', league_name: 'الدوري المغربي' });
  };

  const deleteMatch = (id) => {
    const updated = matches.filter(m => m.id !== id);
    setMatches(updated);
    localStorage.setItem('admin_matches', JSON.stringify(updated));
  };

  const saveNewArticle = (e) => {
    e.preventDefault();
    const localArticles = localStorage.getItem('admin_articles');
    const currentCustom = localArticles ? JSON.parse(localArticles) : [];
    
    const formattedNewArt = {
      id: `admin-${Date.now()}`,
      title: newArticle.title,
      content: newArticle.content,
      category: newArticle.category,
      origin: newArticle.origin,
      source: newArticle.source,
      image_url: newArticle.image_url || "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
      published_at: new Date().toISOString(),
      link: "#"
    };

    const updated = [formattedNewArt, ...currentCustom];
    localStorage.setItem('admin_articles', JSON.stringify(updated));
    setNewArticle({ title: '', content: '', category: 'البطولة الاحترافية', origin: 'maroc', image_url: '', source: 'كووورة مغربية' });
    setActiveTab(newArticle.origin);
  };

  const deleteCustomArticle = (id) => {
    const localArticles = localStorage.getItem('admin_articles');
    if (localArticles) {
      const current = JSON.parse(localArticles);
      const updated = current.filter(a => a.id !== id);
      localStorage.setItem('admin_articles', JSON.stringify(updated));
      setNews(news.filter(n => n.id !== id));
    }
  };

  const filteredNews = news.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-gray-100 font-sans flex flex-col items-center" dir="rtl">
      
      {showSplash && (
        <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50 animate-fadeIn">
          <div className="flex flex-col items-center space-y-6 text-center max-w-sm px-6">
            <Logo className="w-32 h-32 drop-shadow-[0_0_25px_rgba(251,191,36,0.25)] animate-bounce" />
            <div className="space-y-2">
              <h1 className="text-3xl font-black tracking-tight text-white flex items-center justify-center gap-2">
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">كووورة</span>
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">مغربية</span>
              </h1>
              <p className="text-xs text-emerald-400 font-medium tracking-wide">Kooora Moroc</p>
            </div>
            <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-amber-500 w-1/2 rounded-full animate-infinite-scroll"></div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md bg-slate-950 min-h-screen flex flex-col shadow-2xl border-x border-slate-800/50 relative pb-24 select-none touch-pan-y">
        
        <header className="bg-slate-900/80 backdrop-blur-md px-4 py-3 sticky top-0 z-40 border-b border-slate-800/60 shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:scale-105 transition-transform duration-300" />
              <div>
                <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-1.5 leading-none">
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">كووورة</span>
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">مغربية</span>
                </h1>
                <p className="text-[9px] text-emerald-400 font-medium tracking-wide mt-1">الأخبار والنتائج في المغرب والعالم مباشر</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => isAdminLoggedIn ? setShowAdminPanel(!showAdminPanel) : setShowAdminModal(true)}
                className={`p-2.5 rounded-full border transition-all ${
                  isAdminLoggedIn 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse' 
                    : 'bg-slate-800/70 text-slate-400 hover:text-white border-slate-700/50'
                }`}
                title="لوحة التحكم"
              >
                <ShieldCheck size={18} />
              </button>
              <button className="p-2.5 bg-slate-800/70 hover:bg-slate-800 rounded-full text-slate-300 border border-slate-700/50">
                <Bell size={18} />
              </button>
            </div>
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="ابحث عن أحدث الأخبار والمباريات..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 text-xs py-2.5 pl-4 pr-10 rounded-xl border border-slate-800 focus:outline-none"
            />
            <Search className="absolute right-3.5 top-3 text-slate-500" size={14} />
          </div>
        </header>

        {activeTab !== 'matches' && !showAdminPanel && (
          <div className="bg-slate-900/40 py-3 border-b border-slate-800/50 animate-fadeIn">
            <div className="px-4 flex justify-between items-center mb-2">
              <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                <Flame size={14} className="animate-bounce" />
                <span>مباشر الآن</span>
              </div>
              <button onClick={() => setActiveTab('matches')} className="text-[10px] text-slate-400">كل المباريات ←</button>
            </div>

            <div className="flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-none">
              {matches.filter(m => m.status === 'live').map((match) => (
                <div key={match.id} className="flex-shrink-0 w-44 bg-slate-950/60 rounded-xl p-2.5 border border-emerald-500/30">
                  <div className="flex justify-between items-center text-[8px] text-slate-400 mb-1">
                    <span className="font-semibold text-emerald-400 truncate max-w-[80px]">{match.league_name}</span>
                    <span className="text-red-400 font-bold animate-pulse">{match.match_time}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="truncate">{match.home_team}</span>
                      <span className="font-bold">{match.score_home}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="truncate">{match.away_team}</span>
                      <span className="font-bold">{match.score_away}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <main className="flex-1 p-4 overflow-y-auto">
          {showAdminPanel && isAdminLoggedIn ? (
            <div className="space-y-6 animate-fadeIn pb-8">
              <div className="flex justify-between items-center bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div>
                  <h2 className="text-sm font-black text-amber-400">مرحباً بك في لوحة تحكم الإدارة</h2>
                  <p className="text-[10px] text-slate-400 mt-0.5">يمكنك إضافة مباريات ومقالات بسهولة</p>
                </div>
                <button onClick={handleAdminLogout} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 p-2 rounded-lg border border-red-500/30 transition-colors">
                  <LogOut size={16} />
                </button>
              </div>

              <form onSubmit={saveNewMatch} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/80 space-y-3">
                <h3 className="text-xs font-black text-white flex items-center gap-1.5 border-b border-slate-800 pb-2">
                  <Tv size={14} className="text-amber-500" />
                  <span>إضافة مباراة جديدة أو تعديل نتيجة</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="الفريق المستضيف" required value={newMatch.home_team} onChange={e => setNewMatch({...newMatch, home_team: e.target.value})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                  <input type="text" placeholder="الفريق الضيف" required value={newMatch.away_team} onChange={e => setNewMatch({...newMatch, away_team: e.target.value})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" placeholder="أهداف المستضيف" value={newMatch.score_home} onChange={e => setNewMatch({...newMatch, score_home: parseInt(e.target.value) || 0})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                  <input type="number" placeholder="أهداف الضيف" value={newMatch.score_away} onChange={e => setNewMatch({...newMatch, score_away: parseInt(e.target.value) || 0})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <select value={newMatch.status} onChange={e => setNewMatch({...newMatch, status: e.target.value})} className="bg-slate-950 text-[10px] p-2 rounded border border-slate-800">
                    <option value="upcoming">قادمة</option>
                    <option value="live">مباشر جارية</option>
                    <option value="finished">منتهية</option>
                  </select>
                  <input type="text" placeholder="التوقيت/الدقيقة" value={newMatch.match_time} onChange={e => setNewMatch({...newMatch, match_time: e.target.value})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                  <input type="text" placeholder="اسم الدوري" value={newMatch.league_name} onChange={e => setNewMatch({...newMatch, league_name: e.target.value})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded text-xs transition-colors">إضافة المباراة للجدول</button>
              </form>

              <form onSubmit={saveNewArticle} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/80 space-y-3">
                <h3 className="text-xs font-black text-white flex items-center gap-1.5 border-b border-slate-800 pb-2">
                  <Newspaper size={14} className="text-amber-500" />
                  <span>تأليف ونشر مقال رياضي عاجل</span>
                </h3>
                <input type="text" placeholder="عنوان المقال العريض" required value={newArticle.title} onChange={e => setNewArticle({...newArticle, title: e.target.value})} className="w-full bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                <textarea rows="3" placeholder="محتوى وتفاصيل الخبر التحليلي..." required value={newArticle.content} onChange={e => setNewArticle({...newArticle, content: e.target.value})} className="w-full bg-slate-950 text-xs p-2 rounded border border-slate-800"></textarea>
                <div className="grid grid-cols-2 gap-2">
                  <select value={newArticle.origin} onChange={e => setNewArticle({...newArticle, origin: e.target.value})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800">
                    <option value="maroc">أخبار كووورة مغربية</option>
                    <option value="monde">أخبار كووورة عالمية</option>
                  </select>
                  <input type="text" placeholder="التصنيف (مثال: البطولة الاحترافية)" value={newArticle.category} onChange={e => setNewArticle({...newArticle, category: e.target.value})} className="bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                </div>
                <input type="text" placeholder="رابط صورة الغلاف" value={newArticle.image_url} onChange={e => setNewArticle({...newArticle, image_url: e.target.value})} className="w-full bg-slate-950 text-xs p-2 rounded border border-slate-800" />
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded text-xs transition-colors">نشر المقال فوراً</button>
              </form>
            </div>
          ) : selectedArticle ? (
            <article className="space-y-4 animate-fadeIn">
              <button onClick={() => setSelectedArticle(null)} className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-xs font-bold bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-800">
                <ChevronLeft size={16} className="rotate-180" />
                <span>العودة للأخبار</span>
              </button>

              <div className="relative rounded-2xl overflow-hidden">
                <img src={selectedArticle.image_url} alt={selectedArticle.title} className="w-full h-52 object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800"; }} />
              </div>

              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800/40 px-3 py-1 rounded-full font-bold">{selectedArticle.category}</span>
                <span>{new Date(selectedArticle.published_at).toLocaleDateString('ar-MA')}</span>
              </div>

              <h2 className="text-base font-bold leading-snug text-white">{selectedArticle.title}</h2>
              <p className="text-slate-300 leading-relaxed text-xs text-justify border-r-2 border-emerald-500/50 pr-3 bg-slate-900/20 py-2.5 rounded-l-lg">{selectedArticle.content}</p>

              {selectedArticle.id.toString().startsWith('admin-') && isAdminLoggedIn && (
                <button onClick={() => { deleteCustomArticle(selectedArticle.id); setSelectedArticle(null); }} className="bg-red-500/10 text-red-400 font-bold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-red-500/30">
                  <Trash2 size={14} />
                  <span>حذف هذا المقال المنشور</span>
                </button>
              )}

              <AdSenseSlot adSlot="9876543210" adFormat="fluid" />

              <div className="pt-4 border-t border-slate-800/80 flex gap-2">
                <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2">
                  <ExternalLink size={14} />
                  <span>المصدر الأصلي للخبر</span>
                </a>
                <button onClick={() => toggleSaveArticle(selectedArticle.id)} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300">
                  <Bookmark size={16} className={savedArticles.includes(selectedArticle.id) ? "fill-emerald-400 text-emerald-400" : ""} />
                </button>
              </div>
            </article>
          ) : (
            <>
              {activeTab === 'home' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-1 text-sm font-bold text-slate-400">
                    <TrendingUp size={16} className="text-emerald-400" />
                    <span>أبرز الأخبار العاجلة واليومية</span>
                  </div>

                  {filteredNews.length > 0 && (
                    <div onClick={() => setSelectedArticle(filteredNews[0])} className="relative rounded-2xl overflow-hidden border border-slate-800 cursor-pointer shadow-lg group">
                      <img src={filteredNews[0].image_url} alt={filteredNews[0].title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-350" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                      <div className="absolute bottom-0 p-4 space-y-1.5 w-full">
                        <span className="bg-emerald-600 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full">{filteredNews[0].category}</span>
                        <h3 className="text-sm font-bold text-white line-clamp-2">{filteredNews[0].title}</h3>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {loading ? (
                      <div className="flex justify-center py-12">
                        <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      filteredNews.slice(1).map((article) => (
                        <div key={article.id} onClick={() => setSelectedArticle(article)} className="bg-slate-900/30 hover:bg-slate-900/80 rounded-2xl p-3 border border-slate-800/40 cursor-pointer flex gap-3">
                          <img src={article.image_url} alt={article.title} className="w-20 h-20 object-cover rounded-xl flex-shrink-0" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800"; }} />
                          <div className="flex flex-col justify-between py-0.5 flex-1">
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] text-emerald-400 font-bold uppercase">{article.category}</span>
                              <span className="text-[8px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-full">{article.source}</span>
                            </div>
                            <h3 className="text-xs font-bold leading-normal text-slate-100 line-clamp-2 mt-1">{article.title}</h3>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {(activeTab === 'maroc' || activeTab === 'monde') && (
                <div className="space-y-3.5 animate-fadeIn">
                  <div className="flex justify-between items-center border-b border-slate-800/60 pb-2">
                    <span className="text-sm font-bold text-slate-400 flex items-center gap-1.5">
                      {activeTab === 'maroc' ? <MapPin size={16} className="text-emerald-400" /> : <Globe size={16} className="text-emerald-400" />}
                      <span>{activeTab === 'maroc' ? "الكرة المغربية والبطولة الاحترافية" : "مستجدات كرة القدم العالمية"}</span>
                    </span>
                  </div>

                  {loading ? (
                    <div className="flex justify-center py-16">
                      <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : filteredNews.length === 0 ? (
                    <p className="text-center text-slate-500 py-10 text-xs">لا يوجد أخبار متوفرة في الوقت الراهن.</p>
                  ) : (
                    filteredNews.map((article, index) => (
                      <React.Fragment key={article.id}>
                        <div onClick={() => setSelectedArticle(article)} className="bg-slate-900/30 hover:bg-slate-900/80 rounded-2xl p-3 border border-slate-800/40 cursor-pointer flex gap-3">
                          <img src={article.image_url} alt={article.title} className="w-20 h-20 object-cover rounded-xl flex-shrink-0" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800"; }} />
                          <div className="flex flex-col justify-between py-0.5 flex-1">
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] text-emerald-400 font-bold uppercase">{article.category}</span>
                              <span className="text-[8px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-full">{article.source}</span>
                            </div>
                            <h3 className="text-xs font-bold leading-normal text-slate-100 line-clamp-2 mt-1">{article.title}</h3>
                            <div className="flex justify-between items-center text-[8px] text-slate-500 mt-1">
                              <span>{new Date(article.published_at).toLocaleDateString('ar-MA')}</span>
                              <span className="text-[10px] text-slate-400 font-bold flex items-center gap-0.5">
                                قراءة المزيد <ChevronRight size={10} className="rotate-180" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {index === 2 && <AdSenseSlot adSlot="1122334455" adFormat="in-article" />}
                      </React.Fragment>
                    ))
                  )}
                </div>
              )}

              {activeTab === 'matches' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 border-b border-slate-800/60 pb-2.5">
                    <Calendar size={14} className="text-emerald-500" />
                    <span>برنامج وجدول مباريات اليوم</span>
                  </div>

                  <div className="space-y-3">
                    {matches.map((match) => (
                      <div key={match.id} className="bg-slate-900/20 rounded-2xl p-4 border border-slate-800/60 flex justify-between items-center relative overflow-hidden">
                        <div className="flex-1 text-center font-bold text-xs truncate text-slate-200">{match.home_team}</div>
                        <div className="flex flex-col items-center px-4 z-10">
                          {match.status === 'upcoming' ? (
                            <span className="bg-slate-800 text-slate-300 text-[10px] px-3 py-1 rounded-full font-bold border border-slate-700/30">
                              {match.match_time}
                            </span>
                          ) : (
                            <div className="flex flex-col items-center">
                              <span className="text-base font-black text-white bg-slate-950 px-3.5 py-1 rounded-lg border border-slate-800/60">
                                {match.score_home} - {match.score_away}
                              </span>
                              {match.status === 'live' && (
                                <span className="text-[9px] text-red-500 font-bold animate-pulse mt-1">مباشر {match.match_time}</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 text-center font-bold text-xs truncate text-slate-200">{match.away_team}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        <nav className="absolute bottom-0 left-0 right-0 h-16 bg-slate-900/95 backdrop-blur-md border-t border-slate-800/80 flex justify-around items-center px-1 z-40 pb-safe">
          <button onClick={() => { setActiveTab('home'); setSelectedArticle(null); setShowAdminPanel(false); }} className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${activeTab === 'home' && !showAdminPanel ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400'}`}>
            <Home size={22} />
          </button>
          <button onClick={() => { setActiveTab('maroc'); setSelectedArticle(null); setShowAdminPanel(false); }} className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all ${activeTab === 'maroc' && !showAdminPanel ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400'}`}>
            <MapPin size={18} /><span className="text-[8px] font-bold mt-1">كووورة مغربية</span>
          </button>
          <button onClick={() => { setActiveTab('monde'); setSelectedArticle(null); setShowAdminPanel(false); }} className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all ${activeTab === 'monde' && !showAdminPanel ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400'}`}>
            <Globe size={18} /><span className="text-[8px] font-bold mt-1">كووورة عالمية</span>
          </button>
          <button onClick={() => { setActiveTab('matches'); setSelectedArticle(null); setShowAdminPanel(false); }} className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all ${activeTab === 'matches' && !showAdminPanel ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400'}`}>
            <Tv size={18} /><span className="text-[8px] font-bold mt-1">مباريات و نتائج</span>
          </button>
        </nav>

        {showAdminLogin && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-sm p-6 relative">
              <button onClick={() => setShowAdminModal(false)} className="absolute left-4 top-4 text-slate-400">
                <X size={18} />
              </button>
              <div className="flex flex-col items-center mb-6 text-center">
                <Logo className="w-14 h-14 mb-3" />
                <h2 className="text-base font-black text-white">تسجيل الدخول للمشرفين</h2>
              </div>
              {adminError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] p-2.5 rounded-lg mb-4 text-center font-bold">{adminError}</div>}
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">البريد الإلكتروني المعتمد</label>
                  <input type="email" required placeholder="admin@koooramoroc.ma" value={adminEmail} onChange={e => setAdminEmail(e.target.value)} className="w-full bg-slate-950 text-xs p-2.5 rounded-xl border border-slate-800 text-left" dir="ltr" />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">كلمة المرور الأمنية</label>
                  <input type="password" required placeholder="••••••••••••••" value={adminPassword} onChange={e => setAdminPassword(e.target.value)} className="w-full bg-slate-950 text-xs p-2.5 rounded-xl border border-slate-800 text-left" dir="ltr" />
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2">
                  <Lock size={14} /><span>دخول لغرفة الإدارة</span>
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}