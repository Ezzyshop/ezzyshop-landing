import { useState } from 'react';
import { T, type Lang } from '../i18n/translations';

interface Props { lang: Lang; }

function ScreenContent({ tab, lang }: { tab: number; lang: Lang }) {
  const t = T[lang];

  if (tab === 0) {
    // Dashboard
    const stats = lang === 'uz'
      ? [['Daromad','2.4M','+12%'],['Buyurtmalar','284','+8%'],['Mijozlar','1,240','+5%']]
      : lang === 'ru'
      ? [['Доход','2.4M','+12%'],['Заказы','284','+8%'],['Клиенты','1,240','+5%']]
      : [['Revenue','2.4M','+12%'],['Orders','284','+8%'],['Customers','1,240','+5%']];
    const bars = [55,72,45,88,65,90,78,85,62,95,70,82];
    const orders = lang === 'uz'
      ? [['AT','#a5c113','Azizbek T.','85,000','Yangi','#f4facc','#8aaa00'],['SF','#8aaa00','Sarvinoz F.','124,000','Yetkazilmoqda','#fef3c7','#d97706'],['MR','#d97706','Murod R.','47,500','Bajarildi','#f4facc','#a5c113']]
      : lang === 'ru'
      ? [['AT','#a5c113','Азизбек Т.','85,000','Новый','#f4facc','#8aaa00'],['SF','#8aaa00','Сарвиноз Ф.','124,000','Доставляется','#fef3c7','#d97706'],['MR','#d97706','Мурод Р.','47,500','Выполнен','#f4facc','#a5c113']]
      : [['AT','#a5c113','Azizbek T.','85,000','New','#f4facc','#8aaa00'],['SF','#8aaa00','Sarvinoz F.','124,000','Delivering','#fef3c7','#d97706'],['MR','#d97706','Murod R.','47,500','Done','#f4facc','#a5c113']];
    return (
      <div style={{background:'#1e2410',padding:'16px'}}>
        <div style={{fontFamily:'var(--font-head)',fontSize:'13px',fontWeight:700,color:'rgba(240,245,200,0.9)',marginBottom:'12px'}}>
          {lang==='uz'?'Bosh panel':lang==='ru'?'Главная':'Dashboard'}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px',marginBottom:'12px'}}>
          {stats.map(([l,v,u],i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'8px',padding:'10px'}}>
              <div style={{fontSize:'9px',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:'4px'}}>{l}</div>
              <div style={{fontFamily:'var(--font-head)',fontSize:'16px',fontWeight:700,color:'#fff'}}>{v}</div>
              <div style={{fontSize:'9px',color:'#a5c113',marginTop:'2px'}}>↑ {u}</div>
            </div>
          ))}
        </div>
        <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'8px',padding:'10px',marginBottom:'10px'}}>
          <div style={{fontSize:'9px',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:'8px'}}>
            {lang==='uz'?'Haftalik sotuv':lang==='ru'?'Продажи за неделю':'Weekly sales'}
          </div>
          <div style={{display:'flex',alignItems:'flex-end',gap:'4px',height:'40px'}}>
            {bars.map((h,i)=>(
              <div key={i} style={{flex:1,height:`${h*0.4}%`,borderRadius:'3px 3px 0 0',background:i%2===0?'#a5c113':'#c4dc4e',opacity:0.7+(i%3)*0.1}}></div>
            ))}
          </div>
        </div>
        <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'8px',padding:'10px'}}>
          <div style={{fontSize:'9px',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:'6px'}}>
            {lang==='uz'?"So'nggi buyurtmalar":lang==='ru'?'Последние заказы':'Recent orders'}
          </div>
          {orders.map(([init,color,name,amt,status,sc,tc],i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',padding:'6px 0',borderBottom:i<2?'1px solid rgba(255,255,255,0.05)':'none'}}>
              <div style={{width:'22px',height:'22px',borderRadius:'50%',background:color as string,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'9px',fontWeight:700}}>{init}</div>
              <div style={{flex:1,fontSize:'10px',color:'rgba(255,255,255,0.7)'}}>{name}</div>
              <div style={{fontSize:'10px',fontWeight:600,color:'#fff'}}>{amt}</div>
              <div style={{fontSize:'8px',padding:'2px 6px',borderRadius:'4px',fontWeight:600,background:sc as string,color:tc as string}}>{status}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tab === 1) {
    const cols = lang==='uz'?['Mahsulot','Kategoriya','Narx','Holat']:lang==='ru'?['Товар','Категория','Цена','Статус']:['Product','Category','Price','Status'];
    const rows = lang==='uz'
      ? [['Non lavash','Nonvoylik','3,500','Faol'],['Osh','Taomlar','25,000','Faol'],['Pepsi 0.5L','Ichimliklar','8,000','Faol'],['Shashlik',"Go'sht",'35,000','Faol']]
      : lang==='ru'
      ? [['Лаваш','Выпечка','3 500','Акт.'],['Плов','Блюда','25 000','Акт.'],['Pepsi 0.5L','Напитки','8 000','Акт.'],['Шашлык','Мясо','35 000','Акт.']]
      : [['Lavash','Bakery','3,500','Active'],['Plov','Dishes','25,000','Active'],['Pepsi 0.5L','Drinks','8,000','Active'],['Shashlik','Meat','35,000','Active']];
    return (
      <div style={{background:'#1e2410',padding:'16px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
          <div style={{fontFamily:'var(--font-head)',fontSize:'13px',fontWeight:700,color:'rgba(240,245,200,0.9)'}}>{T[lang].screen_tabs[1]}</div>
          <div style={{background:'#a5c113',color:'#1a1f0d',borderRadius:'6px',padding:'4px 10px',fontSize:'10px',fontWeight:700}}>+ {lang==='uz'?"Qo'shish":lang==='ru'?'Добавить':'Add'}</div>
        </div>
        <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'8px',overflow:'hidden'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1.5fr 1fr 1fr',padding:'8px 12px',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
            {cols.map((c,i)=><div key={i} style={{fontSize:'9px',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.5px'}}>{c}</div>)}
          </div>
          {rows.map((r,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'2fr 1.5fr 1fr 1fr',padding:'10px 12px',borderBottom:i<3?'1px solid rgba(255,255,255,0.05)':'none',alignItems:'center'}}>
              <div style={{fontSize:'11px',color:'rgba(240,245,200,0.9)',fontWeight:500}}>{r[0]}</div>
              <div style={{fontSize:'10px',color:'rgba(255,255,255,0.5)'}}>{r[1]}</div>
              <div style={{fontSize:'11px',color:'#fff',fontWeight:600}}>{r[2]}</div>
              <div style={{fontSize:'9px',background:'#f4facc',color:'#8aaa00',borderRadius:'4px',padding:'2px 6px',fontWeight:600,display:'inline-block'}}>{r[3]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tab === 2) {
    const statuses = lang==='uz'?['Yangi','Tayyorlanmoqda','Yetkazilmoqda','Bajarildi']:lang==='ru'?['Новый','Готовится','Доставляется','Выполнен']:['New','Preparing','Delivering','Done'];
    const sc = ['#a5c113','#d97706','#2481cc','#16a34a'];
    const ordersList = [
      {id:'#1042',name:lang==='uz'?'Azizbek T.':lang==='ru'?'Азизбек Т.':'Azizbek T.',items:'2',st:0},
      {id:'#1041',name:lang==='uz'?'Sarvinoz F.':lang==='ru'?'Сарвиноз Ф.':'Sarvinoz F.',items:'4',st:1},
      {id:'#1040',name:lang==='uz'?'Murod R.':lang==='ru'?'Мурод Р.':'Murod R.',items:'1',st:2},
      {id:'#1039',name:lang==='uz'?'Dilnoza K.':lang==='ru'?'Дильноза К.':'Dilnoza K.',items:'3',st:3},
    ];
    return (
      <div style={{background:'#1e2410',padding:'16px'}}>
        <div style={{fontFamily:'var(--font-head)',fontSize:'13px',fontWeight:700,color:'rgba(240,245,200,0.9)',marginBottom:'12px'}}>{T[lang].screen_tabs[2]}</div>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
          {ordersList.map((o,i)=>(
            <div key={i} style={{background:'rgba(255,255,255,0.05)',borderRadius:'8px',padding:'10px 12px',display:'flex',alignItems:'center',gap:'10px'}}>
              <div style={{width:'28px',height:'28px',borderRadius:'50%',background:sc[o.st],color:o.st===0?'#1a1f0d':'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'9px',fontWeight:700}}>{o.name.slice(0,2).toUpperCase()}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:'11px',color:'rgba(240,245,200,0.9)',fontWeight:600}}>{o.name} <span style={{color:'rgba(255,255,255,0.4)',fontWeight:400}}>· {o.id}</span></div>
                <div style={{fontSize:'9px',color:'rgba(255,255,255,0.4)'}}>{o.items} items</div>
              </div>
              <div style={{fontSize:'9px',borderRadius:'4px',padding:'3px 7px',fontWeight:600,background:`${sc[o.st]}22`,color:sc[o.st]}}>{statuses[o.st]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Customers tab
  const custCols = lang==='uz'?['Mijoz','Buyurtmalar','Jami']:lang==='ru'?['Клиент','Заказы','Итого']:['Customer','Orders','Total'];
  const custs = [['Azizbek T.','12','820,000'],['Sarvinoz F.','8','540,000'],['Murod R.','15','1,240,000'],['Dilnoza K.','5','310,000']];
  const avC = ['#a5c113','#8aaa00','#d97706','#c4dc4e'];
  return (
    <div style={{background:'#1e2410',padding:'16px'}}>
      <div style={{fontFamily:'var(--font-head)',fontSize:'13px',fontWeight:700,color:'rgba(240,245,200,0.9)',marginBottom:'12px'}}>{T[lang].screen_tabs[3]}</div>
      <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'8px',overflow:'hidden'}}>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1.2fr',padding:'8px 12px',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
          {custCols.map((c,i)=><div key={i} style={{fontSize:'9px',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.5px'}}>{c}</div>)}
        </div>
        {custs.map((r,i)=>(
          <div key={i} style={{display:'grid',gridTemplateColumns:'2fr 1fr 1.2fr',padding:'10px 12px',borderBottom:i<3?'1px solid rgba(255,255,255,0.05)':'none',alignItems:'center'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{width:'22px',height:'22px',borderRadius:'50%',background:avC[i],color:i<2?'#1a1f0d':'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'9px',fontWeight:700}}>{r[0].slice(0,2)}</div>
              <div style={{fontSize:'11px',color:'rgba(240,245,200,0.9)',fontWeight:500}}>{r[0]}</div>
            </div>
            <div style={{fontSize:'11px',color:'rgba(255,255,255,0.6)'}}>{r[1]}</div>
            <div style={{fontSize:'11px',color:'#fff',fontWeight:600}}>{r[2]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Screens({ lang }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const t = T[lang];

  return (
    <section className="section section-alt" id="screens">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-tag">{t.screens_tag}</div>
          <h2 className="section-title">{t.screens_title}</h2>
        </div>
        <div className="screens-tabs reveal">
          {t.screen_tabs.map((tab, i) => (
            <button
              key={i}
              className={`screen-tab${activeTab === i ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="screen-display reveal">
          <div className="screen-bar">
            <div className="screen-dot" style={{background:'#ff5f57'}}></div>
            <div className="screen-dot" style={{background:'#ffbd2e'}}></div>
            <div className="screen-dot" style={{background:'#28c840'}}></div>
            <div style={{flex:1}}></div>
            <div style={{background:'rgba(255,255,255,0.07)',borderRadius:'4px',padding:'2px 12px',fontSize:'11px',color:'rgba(255,255,255,0.4)'}}>dashboard.ezzyshop.uz</div>
            <div style={{flex:1}}></div>
          </div>
          <ScreenContent tab={activeTab} lang={lang} />
        </div>
      </div>
    </section>
  );
}
