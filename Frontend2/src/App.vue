<template>
  <svg style="display:none">
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></symbol>
    <symbol id="i-bell" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></symbol>
    <symbol id="i-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></symbol>
    <symbol id="i-left" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></symbol>
    <symbol id="i-right" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></symbol>
    <symbol id="i-heart" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></symbol>
    <symbol id="i-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></symbol>
    <symbol id="i-users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
    <symbol id="i-box" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></symbol>
    <symbol id="i-chart" viewBox="0 0 24 24"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></symbol>
    <symbol id="i-history" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></symbol>
    <symbol id="i-up" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></symbol>
    <symbol id="i-down" viewBox="0 0 24 24"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></symbol>
    <symbol id="i-send" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></symbol>
    <symbol id="i-edit" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></symbol>
    <symbol id="i-alert" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
    <symbol id="i-trash" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></symbol>
    <symbol id="i-archive" viewBox="0 0 24 24"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></symbol>
    <symbol id="i-dot" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></symbol>
    <symbol id="i-filter" viewBox="0 0 24 24"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></symbol>
  </svg>

  <div class="app">
    <aside class="sidebar">
      <div class="logo"><span>Dash</span>Stack</div>
      <nav><button v-for="k in NAV.main" :key="k" :class="['nav-item',{active:active===k}]" @click="active=k">{{ t(k) }}</button></nav>
      <div class="nav-sep"></div>
      <div class="nav-label">{{ t('pages') }}</div>
      <nav><button v-for="k in NAV.pages" :key="k" :class="['nav-item',{active:active===k}]" @click="active=k">{{ t(k) }}</button></nav>
      <div class="nav-sep"></div>
      <nav><button v-for="k in NAV.foot" :key="k" :class="['nav-item',{active:active===k}]" @click="active=k">{{ t(k) }}</button></nav>
    </aside>

    <div class="main">
      <header class="topbar">
        <label class="search"><svg class="ico" width="15" height="15"><use href="#i-search"/></svg><input :placeholder="t('search')" /></label>
        <div class="topbar-right">
          <button class="bell"><svg class="ico" width="19" height="19"><use href="#i-bell"/></svg><span class="badge">6</span></button>
          <div class="lang-wrap">
            <button class="lang" @click.stop="langOpen=!langOpen">
              <span>{{ curLang.flag }}</span><span>{{ curLang.name }}</span>
              <svg class="ico" width="14" height="14"><use href="#i-chevron"/></svg>
            </button>
            <div class="lang-menu" v-if="langOpen">
              <button v-for="l in LANGS" :key="l.code" :class="['lang-option',{active:l.code===lang}]" @click="setLang(l.code)">{{ l.flag }} {{ l.name }}</button>
            </div>
          </div>
          <button class="user">
            <span class="avatar">👩‍</span>
            <span class="user-meta"><b>Moni Roy</b><small>{{ t('admin') }}</small></span>
            <svg class="ico muted" width="14" height="14"><use href="#i-chevron"/></svg>
          </button>
        </div>
      </header>

      <main class="content">
        <!-- ===== DASHBOARD ===== -->
        <section v-show="page==='dashboard'">
          <h1 class="page-title">{{ t('dashboard') }}</h1>
          <section class="stats-grid">
            <article v-for="s in STATS" :key="s.title" class="stat-card">
              <div class="stat-top">
                <div><div class="stat-title">{{ t(s.title) }}</div><div class="stat-value">{{ s.value }}</div></div>
                <span :class="'stat-icon ' + s.tint"><svg class="ico" width="20" height="20"><use :href="'#i-' + s.icon"/></svg></span>
              </div>
              <div class="stat-trend">
                <svg :class="['ico', s.dir]" width="14" height="14"><use :href="'#i-' + s.dir"/></svg>
                <span :class="s.dir">{{ s.delta }}</span><span class="muted">{{ t(s.note) }}</span>
              </div>
            </article>
          </section>
          <section class="panel">
            <div class="panel-head"><h2>{{ t('salesDetails') }}</h2>
              <button class="dropdown">{{ t('october') }} <svg class="ico" width="13" height="13"><use href="#i-chevron"/></svg></button></div>
            <div v-html="chartSvg"></div>
          </section>
          <section class="panel">
            <div class="panel-head"><h2>{{ t('dealsDetails') }}</h2>
              <button class="dropdown">{{ t('october') }} <svg class="ico" width="13" height="13"><use href="#i-chevron"/></svg></button></div>
            <div class="table-wrap">
              <table>
                <thead><tr><th>{{ t('productName') }}</th><th>{{ t('location') }}</th><th>{{ t('dateTime') }}</th><th>{{ t('piece') }}</th><th>{{ t('amount') }}</th><th>{{ t('status') }}</th></tr></thead>
                <tbody>
                  <tr v-for="d in DEALS" :key="d.name">
                    <td><span class="product-cell"><span class="product-img">{{ d.emoji }}</span>{{ d.name }}</span></td>
                    <td>{{ d.location }}</td><td>{{ d.date }}</td><td>{{ d.piece }}</td><td>{{ d.amount }}</td>
                    <td><span :class="'status status-' + d.status">{{ t(d.status) }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <!-- ===== PRODUCTS ===== -->
        <section v-show="page==='products'">
          <h1 class="page-title">{{ t('products') }}</h1>
          <div class="banner" :style="{ background: SLIDES[slide].bg }">
            <button class="banner-arrow left" @click="slide=(slide-1+SLIDES.length)%SLIDES.length"><svg class="ico" width="14" height="14"><use href="#i-left"/></svg></button>
            <div>
              <div class="banner-date">{{ SLIDES[slide].date }}</div>
              <h2>{{ SLIDES[slide].t1 }}<br>{{ SLIDES[slide].t2 }}</h2>
              <p>{{ SLIDES[slide].p }}</p>
              <button class="btn-orange">{{ t('getStarted') }}</button>
            </div>
            <button class="banner-arrow right" @click="slide=(slide+1)%SLIDES.length"><svg class="ico" width="14" height="14"><use href="#i-right"/></svg></button>
          </div>
          <div class="product-carousel">
            <button class="carousel-arrow left" @click="scrollTrack(-380)"><svg class="ico" width="14" height="14"><use href="#i-left"/></svg></button>
            <div class="product-track" ref="track">
              <article v-for="(p,i) in CATALOG" :key="p.name" class="product-card">
                <div class="product-imgbox"><span>{{ p.imgs[imgIdx[i]] }}</span></div>
                <div class="product-info">
                  <div>
                    <div class="product-name">{{ p.name }}</div>
                    <div class="product-price">{{ p.price }}</div>
                    <div class="product-rate"><span v-html="stars(p.stars)"></span><small>({{ p.count }})</small></div>
                  </div>
                  <button :class="['fav-btn',{active:p.fav}]" @click="toggleFav(i)"><svg class="ico" width="14" height="14"><use href="#i-heart"/></svg></button>
                </div>
                <button class="edit-btn">{{ t('editProduct') }}</button>
              </article>
            </div>
            <button class="carousel-arrow right" @click="scrollTrack(380)"><svg class="ico" width="14" height="14"><use href="#i-right"/></svg></button>
          </div>
        </section>

        <!-- ===== FAVORITES ===== -->
        <section v-show="page==='favorites'">
          <h1 class="page-title">{{ t('favorites') }}</h1>
          <div class="fav-grid" v-if="favList.length">
            <article v-for="o in favList" :key="o.p.name" class="fav-card">
              <div class="fav-imgbox">
                <button class="card-arrow left" @click="shiftImg(o.i,-1)"><svg class="ico" width="13" height="13"><use href="#i-left"/></svg></button>
                <span>{{ o.p.imgs[imgIdx[o.i]] }}</span>
                <button class="card-arrow right" @click="shiftImg(o.i,1)"><svg class="ico" width="13" height="13"><use href="#i-right"/></svg></button>
              </div>
              <div class="product-info">
                <div>
                  <div class="product-name">{{ o.p.name }}</div>
                  <div class="product-price">{{ o.p.price }}</div>
                  <div class="product-rate"><span v-html="stars(o.p.stars)"></span><small>({{ o.p.count }})</small></div>
                </div>
                <button class="fav-btn active" @click="toggleFav(o.i)"><svg class="ico" width="14" height="14"><use href="#i-heart"/></svg></button>
              </div>
              <button class="edit-btn">{{ t('editProduct') }}</button>
            </article>
          </div>
          <div v-else class="empty-fav">❤️ {{ t('noFav') }}</div>
        </section>

        <!-- ===== INBOX ===== -->
        <section v-show="page==='inbox'">
          <h1 class="page-title">{{ t('inbox') }}</h1>
          <div class="inbox-wrap">
            <aside class="mail-side">
              <button class="compose-btn" @click="showToast(t('composeOpen'))">{{ t('compose') }}</button>
              <div class="mail-head">{{ t('myEmail') }}</div>
              <nav>
                <button v-for="f in FOLDERS" :key="f.key" :class="['mail-item',{active:activeFolder===f.key}]" @click="activeFolder=f.key">
                  <svg class="ico" width="14" height="14"><use :href="'#' + f.icon"/></svg>
                  <span>{{ t(f.key) }}</span><span class="cnt">{{ f.cnt }}</span>
                </button>
              </nav>
              <div class="mail-head">{{ t('label') }}</div>
              <div>
                <button v-for="l in LABELS" :key="l.key" class="label-item" @click="l.on=!l.on">
                  <span class="label-box" :style="{ borderColor:l.color, background:l.on?l.color:'transparent' }"></span>
                  <span>{{ t(l.key) }}</span>
                </button>
              </div>
              <button class="create-label"><svg class="ico" width="12" height="12"><use href="#i-plus"/></svg><span>{{ t('createNewLabel') }}</span></button>
            </aside>
            <section class="mail-main">
              <div class="mail-top">
                <label class="mail-search"><svg class="ico" width="14" height="14"><use href="#i-search"/></svg><input v-model="mailQuery" :placeholder="t('searchMail')" /></label>
                <div class="mail-actions">
                  <button class="icon-sq"><svg class="ico" width="15" height="15"><use href="#i-archive"/></svg></button>
                  <button class="icon-sq"><svg class="ico" width="15" height="15"><use href="#i-dot"/></svg></button>
                  <button class="icon-sq"><svg class="ico" width="15" height="15"><use href="#i-trash"/></svg></button>
                </div>
              </div>
              <div v-if="mailRows.length">
                <div v-for="(m,i) in mailRows" :key="i" class="mail-row">
                  <button :class="['chk',{on:m.checked}]" @click="m.checked=!m.checked"><svg v-if="m.checked" class="ico" width="10" height="10"><use href="#i-check"/></svg></button>
                  <button :class="['star-btn',{on:m.star}]" @click="m.star=!m.star"><svg class="ico" width="15" height="15"><use href="#i-star"/></svg></button>
                  <span class="mail-from">{{ m.from }}</span>
                  <span v-if="m.tag" :class="'mail-tag tag-' + m.tag">{{ t(m.tag) }}</span>
                  <span class="mail-subj">{{ m.subj }}</span>
                  <span class="mail-time">{{ m.time }}</span>
                </div>
              </div>
              <div v-else style="padding:16px"><div class="empty-fav">🔍 {{ t('noMail') }}</div></div>
              <div class="list-foot"><span class="muted">{{ t('mailFoot') }}</span>
                <span class="foot-arrows">
                  <button class="icon-sq"><svg class="ico" width="14" height="14"><use href="#i-left"/></svg></button>
                  <button class="icon-sq"><svg class="ico" width="14" height="14"><use href="#i-right"/></svg></button>
                </span>
              </div>
            </section>
          </div>
        </section>

        <!-- ===== ORDER LISTS ===== -->
        <section v-show="page==='orderLists'">
          <h1 class="page-title">{{ t('orderLists') }}</h1>
          <div class="filter-bar">
            <span class="filter-ico"><svg class="ico" width="16" height="16"><use href="#i-filter"/></svg></span>
            <span class="filter-label">{{ t('filterBy') }}</span>
            <div class="fgroup">
              <button class="fbtn" @click.stop="calOpen=!calOpen">{{ t('date') }} <svg class="ico" width="13" height="13"><use href="#i-chevron"/></svg></button>
              <div class="cal-pop" v-if="calOpen" @click.stop>
                <div class="cal-head"><b>{{ calTitle }}</b>
                  <span class="cal-nav">
                    <button @click="calPrev"><svg class="ico" width="12" height="12"><use href="#i-left"/></svg></button>
                    <button @click="calNext"><svg class="ico" width="12" height="12"><use href="#i-right"/></svg></button>
                  </span>
                </div>
                <div class="cal-grid">
                  <span v-for="(w,i) in ['S','M','T','W','T','F','S']" :key="'w'+i" class="cal-w">{{ w }}</span>
                  <span v-for="(d,i) in calDays" :key="'d'+i" :class="['cal-d',{off:!d.cur,on:d.cur&&selDays.includes(d.day)}]" @click="d.cur&&toggleDay(d.day)">{{ d.day }}</span>
                </div>
                <div class="cal-note">{{ t('multiDate') }}</div>
                <button class="apply-btn" @click="applyDates">{{ t('applyNow') }}</button>
              </div>
            </div>
            <div class="fgroup">
              <button class="fbtn" @click.stop="ddType=!ddType; ddStatus=false">{{ t('orderType') }} <svg class="ico" width="13" height="13"><use href="#i-chevron"/></svg></button>
              <div class="dd-menu" v-if="ddType">
                <button v-for="ty in TYPES" :key="ty" :class="['dd-option',{active:fType===ty}]" @click="fType = fType===ty?'':ty; ddType=false">{{ t(ty) }}</button>
              </div>
            </div>
            <div class="fgroup">
              <button class="fbtn" @click.stop="ddStatus=!ddStatus; ddType=false">{{ t('orderStatus') }} <svg class="ico" width="13" height="13"><use href="#i-chevron"/></svg></button>
              <div class="dd-menu" v-if="ddStatus">
                <button v-for="st in STATUSES" :key="st" :class="['dd-option',{active:fStatus===st}]" @click="fStatus = fStatus===st?'':st; ddStatus=false">{{ t(st) }}</button>
              </div>
            </div>
            <button class="reset-btn" @click="resetFilters"><svg class="ico" width="14" height="14"><use href="#i-history"/></svg>{{ t('resetFilter') }}</button>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>{{ t('id') }}</th><th>{{ t('name') }}</th><th>{{ t('address') }}</th><th>{{ t('date') }}</th><th>{{ t('type') }}</th><th>{{ t('status') }}</th></tr></thead>
              <tbody>
                <tr v-for="o in orderRows" :key="o.id">
                  <td>{{ o.id }}</td><td>{{ o.name }}</td><td>{{ o.address }}</td><td>{{ o.date }}</td><td>{{ t(o.type) }}</td>
                  <td><span :class="'pill pill-' + o.status">{{ t(o.status) }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="list-foot"><span class="muted">{{ t('ordersFoot') }}</span>
            <span class="foot-arrows">
              <button class="icon-sq"><svg class="ico" width="14" height="14"><use href="#i-left"/></svg></button>
              <button class="icon-sq"><svg class="ico" width="14" height="14"><use href="#i-right"/></svg></button>
            </span>
          </div>
        </section>

        <!-- ===== PRODUCT STOCK ===== -->
        <section v-show="page==='productStock'">
          <div class="stock-head">
            <h1 class="page-title">{{ t('productStock') }}</h1>
            <label class="stock-search"><svg class="ico" width="14" height="14"><use href="#i-search"/></svg><input v-model="stockQuery" :placeholder="t('searchProduct')" /></label>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>{{ t('image') }}</th><th>{{ t('productName') }}</th><th>{{ t('category') }}</th><th>{{ t('price') }}</th><th>{{ t('piece') }}</th><th>{{ t('availableColor') }}</th><th>{{ t('action') }}</th></tr></thead>
              <tbody>
                <tr v-for="s in stockRows" :key="s.name + s.price">
                  <td><span class="product-img stock-img">{{ s.emoji }}</span></td>
                  <td>{{ s.name }}</td><td>{{ t(s.category) }}</td><td>{{ s.price }}</td><td>{{ s.piece }}</td>
                  <td><span class="color-dots"><span v-for="(c,i) in s.colors" :key="i" class="color-dot" :style="{background:c}"></span></span></td>
                  <td>
                    <button class="act-btn" @click="showToast(t('editProduct'))"><svg class="ico" width="14" height="14"><use href="#i-edit"/></svg></button>
                    <button class="act-btn danger" @click="removeStock(s)"><svg class="ico" width="14" height="14"><use href="#i-trash"/></svg></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="list-foot"><span class="muted">{{ t('ordersFoot') }}</span>
            <span class="foot-arrows">
              <button class="icon-sq"><svg class="ico" width="14" height="14"><use href="#i-left"/></svg></button>
              <button class="icon-sq"><svg class="ico" width="14" height="14"><use href="#i-right"/></svg></button>
            </span>
          </div>
        </section>

        <!-- ===== PRICING ===== -->
        <section v-show="page==='pricing'">
          <h1 class="page-title">{{ t('pricing') }}</h1>
          <div class="price-grid">
            <article v-for="p in PLANS" :key="p.key" class="price-card">
              <b class="price-name">{{ t(p.key) }}</b>
              <span class="price-sub">{{ t('monthlyCharge') }}</span>
              <div class="price-value">{{ p.price }}</div>
              <hr />
              <ul class="price-feats"><li v-for="(f,i) in FEATS" :key="f" :class="{off:!p.on[i]}">{{ t(f) }}</li></ul>
              <hr />
              <button :class="['price-btn',{solid:p.solid}]">{{ t('getStarted') }}</button>
              <a class="price-trial" href="#">{{ t('startTrial') }}</a>
            </article>
          </div>
        </section>
      </main>
    </div>
  </div>

  <div :class="['toast',{show:toastOn}]">{{ toastMsg }}</div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const I18N = {
  en: { search:"Search", pages:"Pages", dashboard:"Dashboard", products:"Products", favorites:"Favorites", inbox:"Inbox",
    orderLists:"Order Lists", productStock:"Product Stock", pricing:"Pricing", calendar:"Calender", todo:"To-Do", contact:"Contact",
    invoice:"Invoice", uiElements:"UI Elements", team:"Team", table:"Table", settings:"Settings", logout:"Logout",
    totalUser:"Total User", totalOrder:"Total Order", totalSales:"Total Sales", totalPending:"Total Pending",
    upYesterday:"Up from yesterday", upWeek:"Up from past week", downYesterday:"Down from yesterday",
    salesDetails:"Sales Details", dealsDetails:"Deals Details", october:"October", productName:"Product Name", location:"Location",
    dateTime:"Date - Time", piece:"Piece", amount:"Amount", status:"Status", getStarted:"Get Started", editProduct:"Edit Product",
    delivered:"Delivered", pending:"Pending", cancelled:"Cancelled", processing:"Processing", admin:"Admin",
    noFav:"No favorites yet — add products from the Products page.", favAdd:"Added to favorites", favRemove:"Removed from favorites",
    compose:"+ Compose", composeOpen:"Compose window opened", myEmail:"My Email", label:"Label", createNewLabel:"Create New Label",
    searchMail:"Search mail", noMail:"No mails found", starred:"Starred", sent:"Sent", draft:"Draft", spam:"Spam", important:"Important",
    bin:"Bin", primary:"Primary", social:"Social", work:"Work", friends:"Friends", mailFoot:"Showing 1-12 of 1,253",
    filterBy:"Filter By", date:"Date", orderType:"Order Type", orderStatus:"Order Status", resetFilter:"Reset Filter",
    multiDate:"*You can choose multiple date", applyNow:"Apply Now", datesApplied:"Dates applied", id:"ID", name:"Name",
    address:"Address", type:"Type", image:"Image", category:"Category", price:"Price", availableColor:"Available Color", action:"Action",
    searchProduct:"Search product name", stockRemoved:"Product removed", ordersFoot:"Showing 1-09 of 78",
    completed:"Completed", rejected:"Rejected", onHold:"On Hold", inTransit:"In Transit",
    electric:"Electric", book:"Book", medicine:"Medicine", mobile:"Mobile", watch:"Watch",
    digital:"Digital Product", fashion:"Fashion", electronic:"Electronic",
    basic:"Basic", standard:"Standard", premium:"Premium", monthlyCharge:"Monthly Charge", freeSetup:"Free Setup",
    bandwidth:"Bandwidth Limit 10 GB", userConn:"20 User Connection", analytics:"Analytics Report", publicApi:"Public API Access",
    plugins:"Plugins Intregation", custom:"Custom Content Management", startTrial:"Start Your 30 Day Free Trial" },
  az: { search:"Axtar", pages:"Səhifələr", dashboard:"Panel", products:"Məhsullar", favorites:"Sevimlilər", inbox:"Gələnlər",
    orderLists:"Sifariş Siyahıları", productStock:"Məhsul Stoku", pricing:"Qiymətlər", calendar:"Təqvim", todo:"Ediləcəklər",
    contact:"Əlaqə", invoice:"Qaimə", uiElements:"UI Elementləri", team:"Komanda", table:"Cədvəl", settings:"Tənzimləmələr",
    logout:"Çıxış", totalUser:"Ümumi İstifadəçi", totalOrder:"Ümumi Sifariş", totalSales:"Ümumi Satış", totalPending:"Gözləyən",
    upYesterday:"Dünəndən artım", upWeek:"Keçən həftədən artım", downYesterday:"Dünəndən azalma", salesDetails:"Satış Detalları",
    dealsDetails:"Razılaşma Detalları", october:"Oktyabr", productName:"Məhsul Adı", location:"Ünvan", dateTime:"Tarix - Vaxt",
    piece:"Say", amount:"Məbləğ", status:"Status", getStarted:"Başla", editProduct:"Məhsulu Redaktə Et", delivered:"Çatdırılıb",
    pending:"Gözləyir", cancelled:"Ləğv edilib", processing:"Emalda", admin:"Admin",
    noFav:"Hələ sevimli yoxdur — Məhsullar səhifəsindən əlavə edin.", favAdd:"Sevimlilərə əlavə olundu", favRemove:"Sevimlilərdən silindi",
    compose:"+ Yarat", composeOpen:"Yazma pəncərəsi açıldı", myEmail:"Mənim E-mailim", label:"Etiket", createNewLabel:"Yeni Etiket Yarat",
    searchMail:"Mail axtar", noMail:"Mail tapılmadı", starred:"Ulduzlu", sent:"Göndərilən", draft:"Qaralama", spam:"Spam",
    important:"Vacib", bin:"Səbət", primary:"Əsas", social:"Sosial", work:"İş", friends:"Dostlar", mailFoot:"Göstərilir 1-12 / 1,253",
    filterBy:"Filtrə Görə", date:"Tarix", orderType:"Sifariş Növü", orderStatus:"Sifariş Statusu", resetFilter:"Filtri Sıfırla",
    multiDate:"*Bir neçə tarix seçə bilərsiniz", applyNow:"İndi Tətbiq Et", datesApplied:"Tarixlər tətbiq olundu", id:"ID", name:"Ad",
    address:"Ünvan", type:"Növ", image:"Şəkil", category:"Kateqoriya", price:"Qiymət", availableColor:"Mövcud Rəng", action:"Əməliyyat",
    searchProduct:"Məhsul adı axtar", stockRemoved:"Məhsul silindi", ordersFoot:"Göstərilir 1-09 / 78",
    completed:"Tamamlandı", rejected:"Rədd edildi", onHold:"Gözləmədə", inTransit:"Yolda",
    electric:"Elektrik", book:"Kitab", medicine:"Dərman", mobile:"Mobil", watch:"Saat",
    digital:"Rəqəmsal Məhsul", fashion:"Moda", electronic:"Elektronika",
    basic:"Basic", standard:"Standard", premium:"Premium", monthlyCharge:"Aylıq Ödəniş", freeSetup:"Pulsuz Qurulum",
    bandwidth:"Bandwidth Limiti 10 GB", userConn:"20 İstifadəçi Bağlantısı", analytics:"Analitika Hesabatı", publicApi:"Public API Girişi",
    plugins:"Plugin İnteqrasiyası", custom:"Fərdi Məzmun İdarəetməsi", startTrial:"30 Günlük Pulsuz Sınağa Başla" },
  tr: { search:"Ara", pages:"Sayfalar", dashboard:"Panel", products:"Ürünler", favorites:"Favoriler", inbox:"Gelen Kutusu",
    orderLists:"Sipariş Listeleri", productStock:"Ürün Stoku", pricing:"Fiyatlandırma", calendar:"Takvim", todo:"Yapılacaklar",
    contact:"İletişim", invoice:"Fatura", uiElements:"UI Öğeleri", team:"Ekip", table:"Tablo", settings:"Ayarlar", logout:"Çıkış",
    totalUser:"Toplam Kullanıcı", totalOrder:"Toplam Sipariş", totalSales:"Toplam Satış", totalPending:"Bekleyen",
    upYesterday:"Düne göre artış", upWeek:"Geçen haftaya göre artış", downYesterday:"Düne göre azalma", salesDetails:"Satış Detayları",
    dealsDetails:"Anlaşma Detayları", october:"Ekim", productName:"Ürün Adı", location:"Konum", dateTime:"Tarih - Saat", piece:"Adet",
    amount:"Tutar", status:"Durum", getStarted:"Başla", editProduct:"Ürünü Düzenle", delivered:"Teslim Edildi", pending:"Beklemede",
    cancelled:"İptal Edildi", processing:"İşlemde", admin:"Yönetici",
    noFav:"Henüz favori yok — Ürünler sayfasından ekleyin.", favAdd:"Favorilere eklendi", favRemove:"Favorilerden kaldırıldı",
    compose:"+ Oluştur", composeOpen:"Yazma penceresi açıldı", myEmail:"E-postam", label:"Etiket", createNewLabel:"Yeni Etiket Oluştur",
    searchMail:"Posta ara", noMail:"Posta bulunamadı", starred:"Yıldızlı", sent:"Gönderilen", draft:"Taslak", spam:"Spam",
    important:"Önemli", bin:"Çöp", primary:"Birincil", social:"Sosyal", work:"İş", friends:"Arkadaşlar", mailFoot:"1-12 / 1.253 gösteriliyor",
    filterBy:"Filtrele", date:"Tarih", orderType:"Sipariş Türü", orderStatus:"Sipariş Durumu", resetFilter:"Filtreyi Sıfırla",
    multiDate:"*Birden fazla tarih seçebilirsiniz", applyNow:"Şimdi Uygula", datesApplied:"Tarihler uygulandı", id:"ID", name:"Ad",
    address:"Adres", type:"Tür", image:"Görsel", category:"Kategori", price:"Fiyat", availableColor:"Mevcut Renk", action:"İşlem",
    searchProduct:"Ürün adı ara", stockRemoved:"Ürün silindi", ordersFoot:"1-09 / 78 gösteriliyor",
    completed:"Tamamlandı", rejected:"Reddedildi", onHold:"Beklemede", inTransit:"Yolda",
    electric:"Elektrik", book:"Kitap", medicine:"İlaç", mobile:"Mobil", watch:"Saat",
    digital:"Dijital Ürün", fashion:"Moda", electronic:"Elektronik",
    basic:"Basic", standard:"Standard", premium:"Premium", monthlyCharge:"Aylık Ücret", freeSetup:"Ücretsiz Kurulum",
    bandwidth:"Bant Genişliği Limiti 10 GB", userConn:"20 Kullanıcı Bağlantısı", analytics:"Analitik Raporu", publicApi:"Public API Erişimi",
    plugins:"Eklenti Entegrasyonu", custom:"Özel İçerik Yönetimi", startTrial:"30 Günlük Ücretsiz Denemeye Başla" },
};
const LANGS = [ { code:"en", flag:"🇬", name:"English" }, { code:"az", flag:"🇦🇿", name:"Azərbaycan" }, { code:"tr", flag:"🇹", name:"Türkçe" } ];
const lang = ref(localStorage.getItem("dash-lang") || "en");
const t = (k) => (I18N[lang.value] && I18N[lang.value][k]) || I18N.en[k] || k;
const langOpen = ref(false);
const curLang = computed(() => LANGS.find(l => l.code === lang.value));
function setLang(c) { lang.value = c; localStorage.setItem("dash-lang", c); langOpen.value = false; }

const toastMsg = ref(""); const toastOn = ref(false); let tt;
function showToast(m) { toastMsg.value = m; toastOn.value = true; clearTimeout(tt); tt = setTimeout(() => (toastOn.value = false), 1800); }

const NAV = { main:["dashboard","products","favorites","inbox","orderLists","productStock"],
  pages:["pricing","calendar","todo","contact","invoice","uiElements","team","table"], foot:["settings","logout"] };
const active = ref("dashboard");
const PAGES = ["dashboard","products","favorites","inbox","orderLists","productStock","pricing"];
const page = computed(() => (PAGES.includes(active.value) ? active.value : "dashboard"));

const STATS = [
  { title:"totalUser", value:"40,689", delta:"8.5%", dir:"up", note:"upYesterday", icon:"users", tint:"purple" },
  { title:"totalOrder", value:"10293", delta:"1.3%", dir:"up", note:"upWeek", icon:"box", tint:"amber" },
  { title:"totalSales", value:"$89,000", delta:"4.3%", dir:"down", note:"downYesterday", icon:"chart", tint:"green" },
  { title:"totalPending", value:"2040", delta:"1.8%", dir:"up", note:"upYesterday", icon:"history", tint:"orange" },
];
const DEALS = [
  { emoji:"⌚", name:"Apple Watch", location:"6096 Marjolaine Landing", date:"12.09.2026 - 12.53 PM", piece:423, amount:"$34,295", status:"delivered" },
  { emoji:"🎧", name:"AirPods Pro", location:"1428 Rooney Bridge", date:"12.09.2026 - 01.24 PM", piece:312, amount:"$12,840", status:"pending" },
  { emoji:"💻", name:"MacBook Pro", location:"8929 Kreiger Station", date:"11.09.2026 - 06.47 PM", piece:158, amount:"$20,806", status:"delivered" },
  { emoji:"📱", name:"iPhone 15", location:"3371 Willms Turnpike", date:"11.09.2026 - 09.12 AM", piece:508, amount:"$41,912", status:"cancelled" },
];
const DATA = [20,24,25,29,30,48,40,39,51,31,37,40,52,42,88,34,45,52,48,46,42,54,46,50,57,62,24,32,31,27,48,49,44,43,72,58,65,60,55,54,58,42,55,50,56,50,56];
const chartSvg = computed(() => {
  const W=1060,H=300,L=56,R=16,T=24,B=40, iw=W-L-R, ih=H-T-B;
  const x=i=>L+i*iw/(DATA.length-1), y=v=>T+(1-v/100)*ih;
  const pts=DATA.map((v,i)=>[x(i),y(v)]);
  const line=pts.map(p=>p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ");
  const area=`${L},${y(0)} ${line} ${x(DATA.length-1)},${y(0)}`;
  const si=DATA.indexOf(Math.max(...DATA)), sx=x(si), sy=y(DATA[si]);
  return `<svg class="chart" viewBox="0 0 1060 300">
    <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4d7dfe" stop-opacity=".28"/><stop offset="100%" stop-color="#4d7dfe" stop-opacity=".02"/>
    </linearGradient></defs>
    ${[20,40,60,80,100].map(g=>`<line x1="${L}" x2="${W-R}" y1="${y(g)}" y2="${y(g)}" stroke="#eceff4"/><text x="${L-12}" y="${y(g)+4}" text-anchor="end" class="axis">${g}%</text>`).join("")}
    <polygon points="${area}" fill="url(#ag)"/><polyline points="${line}" fill="none" stroke="#4d7dfe" stroke-width="2"/>
    ${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#4d7dfe" stroke="#fff" stroke-width="1.2"/>`).join("")}
    ${["5k","10k","15k","20k","25k","30k","35k","40k","45k","50k","55k","60k"].map((tk,i)=>`<text x="${L+i*iw/11}" y="${H-12}" text-anchor="middle" class="axis">${tk}</text>`).join("")}
    <rect x="${sx-42}" y="${sy-38}" width="84" height="22" rx="5" fill="#4d7dfe"/>
    <text x="${sx}" y="${sy-23}" text-anchor="middle" class="tooltip">64,3664,77</text></svg>`;
});

const SLIDES = [
  { date:"September 12-22", t1:"Enjoy free home", t2:"delivery in this summer", p:"Designer Dresses - Pick from trendy Designer Dress.", bg:"#4d7dfe" },
  { date:"October 1-10", t1:"New season,", t2:"new collections", p:"Fresh styles - Pick from the newest arrivals.", bg:"#7a5af8" },
];
const slide = ref(0);
const CATALOG = reactive([
  { name:"Apple Watch Series 4", price:"$120.00", stars:4, count:131, fav:true,  imgs:["⌚","",""] },
  { name:"Air-Max-270",          price:"$60.00",  stars:4, count:64,  fav:true,  imgs:["👟","","🩴"] },
  { name:"Minimal Chair Tool",   price:"$24.59",  stars:4, count:63,  fav:true,  imgs:["🪑","️","🪞"] },
  { name:"Amazfit Vip",          price:"$96.00",  stars:4, count:67,  fav:true,  imgs:["⌚","",""] },
  { name:"Gumbo Mouse",          price:"$45.00",  stars:4, count:87,  fav:true,  imgs:["🖱️","️","🖲️"] },
  { name:"Camera Tripod",        price:"$58.99",  stars:4, count:67,  fav:true,  imgs:["📷","",""] },
  { name:"MacBook Pro 14",       price:"$1,999",  stars:5, count:231, fav:false, imgs:["💻","️","⌨️"] },
  { name:"AirPods Pro 2",        price:"$249.00", stars:5, count:231, fav:false, imgs:["🎧","",""] },
]);
const imgIdx = reactive(CATALOG.map(() => 0));
const track = ref(null);
const scrollTrack = (d) => track.value && track.value.scrollBy({ left:d, behavior:"smooth" });
function toggleFav(i) { CATALOG[i].fav = !CATALOG[i].fav; showToast(CATALOG[i].fav ? t("favAdd") + " ❤️" : t("favRemove")); }
function shiftImg(i,d) { imgIdx[i] = (imgIdx[i] + d + CATALOG[i].imgs.length) % CATALOG[i].imgs.length; }
const favList = computed(() => CATALOG.map((p,i)=>({p,i})).filter(o => o.p.fav));
const stars = (n) => [1,2,3,4,5].map(i => `<span class="${i<=n?"":"off"}">★</span>`).join("");

const FOLDERS = [
  { key:"inbox", icon:"i-mail", cnt:"1263" }, { key:"starred", icon:"i-star", cnt:"245" },
  { key:"sent", icon:"i-send", cnt:"24,532" }, { key:"draft", icon:"i-edit", cnt:"09" },
  { key:"spam", icon:"i-alert", cnt:"14" }, { key:"important", icon:"i-shield", cnt:"18" }, { key:"bin", icon:"i-trash", cnt:"9" },
];
const LABELS = reactive([
  { key:"primary", color:"#0dcea7", on:false }, { key:"social", color:"#4d7dfe", on:false },
  { key:"work", color:"#f5a623", on:false }, { key:"friends", color:"#ec4899", on:false },
]);
const MAILS = reactive([
  { from:"Juliu Jalal", tag:"primary", subj:"Our Bachelor of Commerce program is ACBSP-accredited.", time:"8:38 AM", star:true, checked:false },
  { from:"Minerva Barnett", tag:"work", subj:"Get Best Advertiser in Your Side Pocket", time:"8:13 AM", star:true, checked:false },
  { from:"Peter Lewis", tag:"friends", subj:"Vacation Home Rental Success", time:"7:52 PM", star:true, checked:false },
  { from:"Anthony Briggs", tag:null, subj:"Free Classifieds Using Them To Promote Your Stuff Online", time:"7:52 PM", star:true, checked:false },
  { from:"Clifford Morgan", tag:"social", subj:"Enhance Your Brand Potential With Giant Advertising Blimps", time:"4:13 PM", star:true, checked:false },
  { from:"Cecilia Webster", tag:"friends", subj:"Always Look On The Bright Side Of Life", time:"3:52 PM", star:true, checked:false },
  { from:"Harvey Manning", tag:null, subj:"Curling Irons Are As Individual As The Women Who Use Them", time:"2:30 PM", star:true, checked:false },
  { from:"Willie Blake", tag:"primary", subj:"Our Bachelor of Commerce program is ACBSP-accredited.", time:"8:38 AM", star:true, checked:false },
  { from:"Minerva Barnett", tag:"work", subj:"Get Best Advertiser in Your Side Pocket", time:"8:13 AM", star:true, checked:false },
  { from:"Fanny Weaver", tag:null, subj:"Free Classifieds Using Them To Promote Your Stuff Online", time:"7:52 PM", star:true, checked:false },
  { from:"Olga Hogan", tag:"social", subj:"Enhance Your Brand Potential With Giant Advertising Blimps", time:"4:13 PM", star:true, checked:false },
  { from:"Lora Houston", tag:"friends", subj:"Vacation Home Rental Success", time:"7:52 PM", star:true, checked:false },
]);
const activeFolder = ref("inbox"); const mailQuery = ref("");
const mailRows = computed(() => {
  const q = mailQuery.value.trim().toLowerCase();
  let list = MAILS;
  if (activeFolder.value === "starred") list = list.filter(m => m.star);
  else if (activeFolder.value !== "inbox") list = [];
  return list.filter(m => !q || m.from.toLowerCase().includes(q) || m.subj.toLowerCase().includes(q));
});

const ORDERS = reactive([
  { id:"00001", name:"Christine Brooks", address:"089 Kutch Green Apt. 448", date:"04 Sep 2026", type:"electric", status:"completed" },
  { id:"00002", name:"Rosie Pearson", address:"979 Immanuel Ferry Suite 526", date:"28 May 2026", type:"book", status:"processing" },
  { id:"00003", name:"Darnell Caldwell", address:"8587 Frida Ports", date:"23 Nov 2026", type:"medicine", status:"rejected" },
  { id:"00004", name:"Gilbert Johnston", address:"768 Destiny Lake Suite 600", date:"05 Feb 2026", type:"mobile", status:"completed" },
  { id:"00005", name:"Alan Cain", address:"042 Mylene Throughway", date:"29 Jul 2026", type:"watch", status:"processing" },
  { id:"00006", name:"Alfred Murray", address:"543 Weimann Mountain", date:"15 Aug 2026", type:"medicine", status:"completed" },
  { id:"00007", name:"Maggie Sullivan", address:"New Scottleberg", date:"21 Dec 2026", type:"watch", status:"processing" },
  { id:"00008", name:"Rosie Todd", address:"New Jon", date:"30 Apr 2026", type:"medicine", status:"onHold" },
  { id:"00009", name:"Dollie Hines", address:"124 Lyla Forge Suite 975", date:"09 Jan 2026", type:"book", status:"inTransit" },
]);
const TYPES = ["electric","book","medicine","mobile","watch"];
const STATUSES = ["completed","processing","rejected","onHold","inTransit"];
const fType = ref(""); const fStatus = ref("");
const ddType = ref(false); const ddStatus = ref(false); const calOpen = ref(false);
const orderRows = computed(() => ORDERS.filter(o => (!fType.value || o.type===fType.value) && (!fStatus.value || o.status===fStatus.value)));
const cal = reactive({ m:1, y:2026 });
const selDays = ref([]);
const calTitle = computed(() => new Date(cal.y, cal.m, 1).toLocaleString(lang.value==="az"?"az":lang.value==="tr"?"tr":"en", { month:"long" }) + " " + cal.y);
const calDays = computed(() => {
  const first = new Date(cal.y, cal.m, 1).getDay();
  const dim = new Date(cal.y, cal.m+1, 0).getDate();
  const prevDim = new Date(cal.y, cal.m, 0).getDate();
  const arr = [];
  for (let i=first-1; i>=0; i--) arr.push({ day: prevDim-i, cur:false });
  for (let d=1; d<=dim; d++) arr.push({ day:d, cur:true });
  return arr;
});
const calPrev = () => { cal.m--; if (cal.m<0) { cal.m=11; cal.y--; } };
const calNext = () => { cal.m++; if (cal.m>11) { cal.m=0; cal.y++; } };
function toggleDay(d) { const i = selDays.value.indexOf(d); i>=0 ? selDays.value.splice(i,1) : selDays.value.push(d); }
function applyDates() { calOpen.value=false; showToast(t("datesApplied") + (selDays.value.length ? " ("+selDays.value.length+")" : "")); }
function resetFilters() { fType.value=""; fStatus.value=""; selDays.value=[]; calOpen.value=false; ddType.value=false; ddStatus.value=false; }

const STOCK = reactive([
  { emoji:"⌚", name:"Apple Watch Series 4", category:"digital", price:"$690.00", piece:63, colors:["#17233b","#9aa3b5","#e58f8f"] },
  { emoji:"🎧", name:"Microsoft Headsquare", category:"digital", price:"$190.00", piece:13, colors:["#17233b","#f0705f","#4d9be6","#e6c84d"] },
  { emoji:"👗", name:"Women's Dress", category:"fashion", price:"$640.00", piece:635, colors:["#8f2d5c","#7ec3e6","#17233b","#2d4de6"] },
  { emoji:"📱", name:"Samsung A50", category:"mobile", price:"$400.00", piece:67, colors:["#2d3e8f","#17233b","#a3164f"] },
  { emoji:"📷", name:"Camera", category:"electronic", price:"$420.00", piece:52, colors:["#2d3e8f","#17233b","#a3164f"] },
  { emoji:"🎧", name:"Microsoft Headsquare", category:"digital", price:"$190.00", piece:13, colors:["#17233b","#f0705f","#4d9be6","#e6c84d"] },
  { emoji:"👗", name:"Women's Dress", category:"fashion", price:"$640.00", piece:635, colors:["#8f2d5c","#7ec3e6","#17233b","#2d4de6"] },
]);
const stockQuery = ref("");
const stockRows = computed(() => STOCK.filter(s => s.name.toLowerCase().includes(stockQuery.value.trim().toLowerCase())));
function removeStock(s) { STOCK.splice(STOCK.indexOf(s), 1); showToast(t("stockRemoved")); }

const FEATS = ["freeSetup","bandwidth","userConn","analytics","publicApi","plugins","custom"];
const PLANS = [
  { key:"basic", price:"$14.99", on:[1,1,1,0,0,0,0], solid:false },
  { key:"standard", price:"$49.99", on:[1,1,1,1,1,0,0], solid:false },
  { key:"premium", price:"$89.99", on:[1,1,1,1,1,1,1], solid:true },
];
</script>

<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; }
.ico { fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
.app { display:flex; min-height:100vh; background:#eef0f5; }
.sidebar { width:220px; flex-shrink:0; background:#fff; border-right:1px solid #e7eaf0; padding:18px 14px; position:sticky; top:0; height:100vh; overflow-y:auto; }
.logo { font-size:20px; font-weight:800; color:#17233b; padding:4px 10px 20px; }
.logo span { color:#3b82f6; }
.nav-item { display:block; width:100%; text-align:left; background:none; border:none; cursor:pointer; padding:10px 14px; margin-bottom:2px; border-radius:8px; font-size:13.5px; color:#40465a; font-family:inherit; }
.nav-item:hover { background:#f2f4f9; }
.nav-item.active { background:#4d7dfe; color:#fff; font-weight:600; box-shadow:0 6px 14px rgba(77,125,254,.35); }
.nav-sep { border-top:1px solid #edf0f5; margin:12px 4px; }
.nav-label { font-size:10.5px; font-weight:700; letter-spacing:.8px; text-transform:uppercase; color:#9aa3b5; padding:2px 14px 8px; }
.main { flex:1; min-width:0; display:flex; flex-direction:column; }
.topbar { display:flex; align-items:center; justify-content:space-between; gap:20px; background:#fafbfd; border-bottom:1px solid #e7eaf0; padding:12px 26px; }
.search { display:flex; align-items:center; gap:9px; width:min(340px,40vw); background:#eef1f6; border-radius:10px; padding:9px 14px; color:#8b94a7; }
.search input { border:none; outline:none; background:transparent; flex:1; font-size:13px; color:#333; font-family:inherit; }
.topbar-right { display:flex; align-items:center; gap:22px; }
.bell { position:relative; background:none; border:none; cursor:pointer; color:#3b82f6; }
.bell .badge { position:absolute; top:-6px; right:-7px; width:15px; height:15px; border-radius:50%; background:#f43f5e; color:#fff; font-size:9px; font-weight:700; display:grid; place-items:center; }
.user { display:flex; align-items:center; gap:10px; background:none; border:none; cursor:pointer; font-family:inherit; }
.avatar { width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg,#fbd0e0,#e6b7d6); display:grid; place-items:center; font-size:19px; }
.user-meta { display:flex; flex-direction:column; align-items:flex-start; line-height:1.15; }
.user-meta b { font-size:13px; color:#17233b; }
.user-meta small { font-size:11px; color:#8b94a7; }
.muted { color:#8b94a7; }
.lang-wrap { position:relative; }
.lang { display:flex; align-items:center; gap:8px; background:none; border:none; cursor:pointer; font-size:13px; color:#333; font-family:inherit; padding:6px 8px; border-radius:8px; }
.lang:hover { background:#eef1f6; }
.lang-menu { position:absolute; top:calc(100% + 8px); right:0; min-width:160px; background:#fff; border:1px solid #e7eaf0; border-radius:10px; padding:6px; box-shadow:0 10px 30px rgba(23,35,59,.14); z-index:60; }
.lang-option { display:flex; align-items:center; gap:10px; width:100%; border:none; background:none; padding:9px 10px; border-radius:8px; font-size:13px; color:#333; cursor:pointer; font-family:inherit; text-align:left; }
.lang-option:hover { background:#f2f4f9; }
.lang-option.active { background:#eef4ff; color:#4d7dfe; font-weight:700; }
.content { padding:24px 26px 34px; }
.page-title { font-size:26px; font-weight:800; color:#17233b; margin-bottom:22px; }
.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
.stat-card { background:#fff; border-radius:12px; padding:18px 20px; box-shadow:0 1px 3px rgba(23,35,59,.06); }
.stat-top { display:flex; justify-content:space-between; align-items:flex-start; gap:10px; }
.stat-title { font-size:13.5px; color:#40465a; }
.stat-value { font-size:26px; font-weight:800; color:#17233b; margin-top:8px; letter-spacing:-.5px; }
.stat-icon { width:46px; height:46px; border-radius:12px; display:grid; place-items:center; flex-shrink:0; }
.stat-icon.purple { background:#e5defc; color:#7a5af8; } .stat-icon.amber { background:#fdf1cf; color:#efaf2b; }
.stat-icon.green { background:#d4f3e3; color:#1fbf8f; } .stat-icon.orange { background:#fde0d2; color:#f27944; }
.stat-trend { display:flex; align-items:center; gap:7px; margin-top:16px; font-size:12.5px; }
.stat-trend .up { color:#10b981; font-weight:700; } .stat-trend .down { color:#f43f5e; font-weight:700; }
.stat-trend svg.up { color:#10b981; } .stat-trend svg.down { color:#f43f5e; }
.panel { background:#fff; border-radius:12px; padding:20px 24px; margin-top:22px; box-shadow:0 1px 3px rgba(23,35,59,.06); }
.panel-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
.panel-head h2 { font-size:19px; font-weight:800; color:#17233b; }
.dropdown { display:flex; align-items:center; gap:8px; background:#f7f8fb; border:1px solid #e7eaf0; border-radius:8px; padding:7px 12px; font-size:12px; color:#6b7280; cursor:pointer; font-family:inherit; }
.chart { width:100%; height:auto; display:block; }
.chart .axis { font-size:11px; fill:#9aa3b5; }
.chart .tooltip { font-size:11px; fill:#fff; font-weight:700; }
.table-wrap { overflow-x:auto; }
table { width:100%; border-collapse:collapse; min-width:760px; }
thead th { background:#eef1f6; text-align:left; font-size:12.5px; font-weight:700; color:#17233b; padding:12px 16px; }
thead th:first-child { border-radius:8px 0 0 8px; } thead th:last-child { border-radius:0 8px 8px 0; }
tbody td { padding:13px 16px; font-size:13px; color:#40465a; border-bottom:1px solid #f0f2f7; }
tbody tr:last-child td { border-bottom:none; }
.product-cell { display:inline-flex; align-items:center; gap:12px; font-weight:600; color:#17233b; }
.product-img { width:34px; height:34px; border-radius:9px; background:#fde0d2; display:grid; place-items:center; font-size:16px; }
.status { display:inline-block; padding:6px 14px; border-radius:999px; font-size:11.5px; font-weight:700; color:#fff; }
.status-delivered { background:#0dcea7; } .status-pending { background:#f5a623; }
.status-cancelled { background:#f43f5e; } .status-processing { background:#4d7dfe; }
.banner { position:relative; border-radius:12px; padding:34px 70px; color:#fff; }
.banner-date { font-size:12px; opacity:.85; margin-bottom:10px; }
.banner h2 { font-size:27px; line-height:1.3; font-weight:800; margin-bottom:10px; }
.banner p { font-size:12px; opacity:.8; margin-bottom:18px; }
.btn-orange { background:#f5824a; color:#fff; border:none; border-radius:8px; padding:10px 18px; font-size:12px; font-weight:700; cursor:pointer; font-family:inherit; }
.banner-arrow { position:absolute; top:50%; transform:translateY(-50%); width:30px; height:30px; border-radius:50%; border:none; cursor:pointer; background:#eef1f6; color:#333; display:grid; place-items:center; }
.banner-arrow.left { left:14px; } .banner-arrow.right { right:14px; }
.product-carousel { position:relative; margin-top:22px; }
.product-track { display:flex; gap:14px; overflow-x:auto; scroll-behavior:smooth; padding:4px 2px 10px; }
.product-card { width:176px; flex-shrink:0; background:#fff; border-radius:10px; padding:12px; box-shadow:0 1px 3px rgba(23,35,59,.06); }
.product-imgbox { height:150px; display:grid; place-items:center; font-size:76px; }
.carousel-arrow { position:absolute; top:50%; transform:translateY(-50%); z-index:2; width:30px; height:30px; border-radius:50%; border:none; cursor:pointer; background:#fff; box-shadow:0 2px 10px rgba(23,35,59,.18); display:grid; place-items:center; color:#333; }
.carousel-arrow.left { left:-8px; } .carousel-arrow.right { right:-8px; }
.product-info { display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:6px; }
.product-name { font-size:12.5px; font-weight:700; color:#17233b; }
.product-price { font-size:12.5px; font-weight:700; color:#3b82f6; margin-top:4px; }
.product-rate { display:flex; align-items:center; gap:3px; margin-top:6px; font-size:12px; color:#f5a623; }
.product-rate .off { color:#d8dce3; }
.product-rate small { color:#9aa3b5; font-size:11px; margin-left:3px; }
.fav-btn { width:30px; height:30px; border-radius:8px; background:#f7f8fb; border:1px solid #e7eaf0; cursor:pointer; display:grid; place-items:center; color:#f43f5e; flex-shrink:0; transition:.15s; }
.fav-btn:hover { background:#fde8ee; }
.fav-btn.active { background:#fde8ee; border-color:#fbd0dc; }
.fav-btn.active svg { fill:#f43f5e; }
.edit-btn { margin-top:12px; background:#eef0f8; border:none; border-radius:8px; padding:8px 14px; font-size:11px; font-weight:600; color:#17233b; cursor:pointer; font-family:inherit; }
.fav-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.fav-card { background:#fff; border-radius:10px; padding:14px; box-shadow:0 1px 3px rgba(23,35,59,.06); }
.fav-imgbox { position:relative; height:200px; display:grid; place-items:center; font-size:92px; }
.card-arrow { position:absolute; top:50%; transform:translateY(-50%); width:28px; height:28px; border-radius:50%; border:none; cursor:pointer; background:#eef1f6; color:#333; display:grid; place-items:center; z-index:2; }
.card-arrow.left { left:4px; } .card-arrow.right { right:4px; }
.empty-fav { background:#fff; border:1px dashed #d8dce3; border-radius:12px; padding:60px 20px; text-align:center; color:#8b94a7; font-size:14px; }
.inbox-wrap { display:flex; gap:20px; align-items:flex-start; }
.mail-side { width:175px; flex-shrink:0; background:#fff; border-radius:10px; padding:16px 12px; box-shadow:0 1px 3px rgba(23,35,59,.06); }
.compose-btn { width:100%; background:#4d7dfe; color:#fff; border:none; border-radius:8px; padding:10px; font-size:12px; font-weight:700; cursor:pointer; font-family:inherit; box-shadow:0 6px 14px rgba(77,125,254,.3); }
.mail-head { font-size:13px; font-weight:800; color:#17233b; margin:16px 6px 8px; }
.mail-item { display:flex; align-items:center; gap:8px; width:100%; border:none; background:none; padding:8px 10px; border-radius:8px; font-size:12px; color:#40465a; cursor:pointer; font-family:inherit; }
.mail-item .ico { color:#8b94a7; }
.mail-item .cnt { margin-left:auto; font-size:11px; color:#8b94a7; }
.mail-item.active { background:#e8efff; color:#4d7dfe; font-weight:700; }
.mail-item.active .ico, .mail-item.active .cnt { color:#4d7dfe; }
.label-item { display:flex; align-items:center; gap:9px; width:100%; border:none; background:none; padding:7px 10px; border-radius:8px; font-size:12px; color:#40465a; cursor:pointer; font-family:inherit; }
.label-box { width:14px; height:14px; border-radius:4px; border:2px solid; flex-shrink:0; }
.create-label { display:flex; align-items:center; gap:6px; color:#9aa3b5; font-size:11.5px; background:none; border:none; cursor:pointer; padding:8px 10px; font-family:inherit; }
.mail-main { flex:1; min-width:0; background:#fff; border-radius:10px; padding:14px 0 0; box-shadow:0 1px 3px rgba(23,35,59,.06); }
.mail-top { display:flex; align-items:center; justify-content:space-between; gap:14px; padding:0 16px 12px; }
.mail-search { display:flex; align-items:center; gap:8px; background:#eef1f6; border-radius:10px; padding:8px 12px; width:min(300px,50%); color:#8b94a7; }
.mail-search input { border:none; outline:none; background:transparent; flex:1; font-size:12.5px; font-family:inherit; }
.mail-actions { display:flex; gap:8px; }
.icon-sq { width:32px; height:32px; border-radius:8px; border:1px solid #e7eaf0; background:#fff; cursor:pointer; display:grid; place-items:center; color:#333; }
.icon-sq:hover { background:#f2f4f9; }
.mail-row { display:flex; align-items:center; gap:10px; padding:12px 16px; border-top:1px solid #f0f2f7; }
.mail-row:hover { background:#f8f9fc; }
.chk { width:16px; height:16px; border:1.5px solid #c9cfd8; border-radius:4px; background:#fff; cursor:pointer; flex-shrink:0; display:grid; place-items:center; color:#fff; padding:0; }
.chk.on { background:#4d7dfe; border-color:#4d7dfe; }
.star-btn { background:none; border:none; cursor:pointer; color:#c9cfd8; flex-shrink:0; display:grid; place-items:center; }
.star-btn.on { color:#f5a623; }
.star-btn.on svg { fill:#f5a623; }
.mail-from { width:120px; flex-shrink:0; font-size:12px; font-weight:700; color:#17233b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.mail-tag { flex-shrink:0; font-size:10px; font-weight:700; padding:4px 10px; border-radius:6px; }
.tag-primary { background:#d5f6ee; color:#0dcea7; } .tag-work { background:#fdeed3; color:#f59e0b; }
.tag-friends { background:#fbdcef; color:#ec4899; } .tag-social { background:#dbe7ff; color:#4d7dfe; }
.mail-subj { flex:1; min-width:0; font-size:12px; color:#6b7280; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.mail-time { flex-shrink:0; font-size:11px; color:#8b94a7; }
.list-foot { display:flex; align-items:center; justify-content:space-between; padding:14px 16px; font-size:12px; }
.foot-arrows { display:flex; gap:8px; }
.filter-bar { position:relative; display:flex; align-items:center; gap:14px; background:#fff; border-radius:10px; padding:14px 18px; box-shadow:0 1px 3px rgba(23,35,59,.06); margin-bottom:20px; flex-wrap:wrap; }
.filter-ico { color:#17233b; display:grid; place-items:center; }
.filter-label { font-size:12.5px; font-weight:700; color:#17233b; }
.fgroup { position:relative; }
.fbtn { display:flex; align-items:center; gap:10px; background:#fff; border:1px solid #e7eaf0; border-radius:8px; padding:9px 14px; font-size:12px; color:#17233b; cursor:pointer; font-family:inherit; }
.fbtn .ico { color:#6b7280; }
.dd-menu { position:absolute; top:calc(100% + 8px); left:0; min-width:150px; background:#fff; border:1px solid #e7eaf0; border-radius:10px; padding:6px; box-shadow:0 10px 30px rgba(23,35,59,.14); z-index:40; }
.dd-option { display:block; width:100%; text-align:left; border:none; background:none; padding:8px 10px; border-radius:8px; font-size:12px; color:#40465a; cursor:pointer; font-family:inherit; }
.dd-option:hover { background:#f2f4f9; }
.dd-option.active { background:#eef4ff; color:#4d7dfe; font-weight:700; }
.reset-btn { display:flex; align-items:center; gap:8px; background:none; border:none; color:#f43f5e; font-size:12px; font-weight:600; cursor:pointer; font-family:inherit; }
.cal-pop { position:absolute; top:calc(100% + 10px); left:0; width:230px; background:#fff; border-radius:12px; padding:16px; box-shadow:0 16px 40px rgba(23,35,59,.18); z-index:50; }
.cal-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; font-size:13px; color:#17233b; }
.cal-nav { display:flex; gap:6px; }
.cal-nav button { width:24px; height:24px; border-radius:6px; border:1px solid #e7eaf0; background:#eef1f6; cursor:pointer; display:grid; place-items:center; color:#333; }
.cal-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:4px; text-align:center; }
.cal-w { font-size:11px; color:#8b94a7; font-weight:700; padding:4px 0; }
.cal-d { font-size:11.5px; color:#40465a; padding:6px 0; border-radius:8px; cursor:pointer; }
.cal-d:hover { background:#f2f4f9; }
.cal-d.off { color:#c9cfd8; cursor:default; }
.cal-d.off:hover { background:none; }
.cal-d.on { background:#4d7dfe; color:#fff; font-weight:700; }
.cal-note { font-size:10.5px; color:#8b94a7; margin:10px 0; }
.apply-btn { width:100%; background:#4d7dfe; color:#fff; border:none; border-radius:8px; padding:9px; font-size:12px; font-weight:700; cursor:pointer; font-family:inherit; }
.pill { display:inline-block; padding:6px 14px; border-radius:8px; font-size:11px; font-weight:700; }
.pill-completed { background:#c9f3e8; color:#0dcea7; }
.pill-processing { background:#e4defc; color:#7a5af8; }
.pill-rejected { background:#fbd5dc; color:#f43f5e; }
.pill-onHold { background:#fde3cd; color:#f5a623; }
.pill-inTransit { background:#e9defc; color:#a56cf5; }
.stock-head { display:flex; align-items:center; justify-content:space-between; gap:16px; }
.stock-head .page-title { margin-bottom:16px; }
.stock-search { display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e7eaf0; border-radius:10px; padding:9px 14px; width:min(260px,60%); color:#8b94a7; }
.stock-search input { border:none; outline:none; background:transparent; flex:1; font-size:12.5px; font-family:inherit; }
.stock-img { width:44px; height:44px; font-size:22px; }
.color-dots { display:flex; gap:6px; }
.color-dot { width:14px; height:14px; border-radius:50%; display:inline-block; }
.act-btn { width:30px; height:30px; border-radius:8px; border:1px solid #e7eaf0; background:#fff; cursor:pointer; display:inline-grid; place-items:center; color:#6b7280; margin-right:6px; }
.act-btn.danger { color:#f43f5e; }
.price-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.price-card { background:#fff; border-radius:12px; padding:28px 26px; text-align:center; box-shadow:0 1px 3px rgba(23,35,59,.06); display:flex; flex-direction:column; align-items:center; }
.price-name { font-size:16px; font-weight:800; color:#17233b; }
.price-sub { font-size:11.5px; color:#8b94a7; margin:6px 0 14px; }
.price-value { font-size:34px; font-weight:800; color:#4d7dfe; margin-bottom:18px; }
.price-card hr { width:100%; border:none; border-top:1px solid #eef0f5; margin:14px 0; }
.price-feats { list-style:none; width:100%; }
.price-feats li { padding:9px 0; font-size:12.5px; color:#17233b; }
.price-feats li.off { color:#c9cfd8; }
.price-btn { margin-top:6px; background:#fff; color:#4d7dfe; border:1.5px solid #4d7dfe; border-radius:999px; padding:10px 26px; font-size:12px; font-weight:700; cursor:pointer; font-family:inherit; }
.price-btn.solid { background:#4d7dfe; color:#fff; }
.price-trial { margin-top:14px; font-size:11.5px; color:#17233b; text-decoration:underline; }
.toast { position:fixed; bottom:24px; left:50%; transform:translateX(-50%) translateY(20px); background:#17233b; color:#fff; padding:10px 18px; border-radius:10px; font-size:13px; opacity:0; pointer-events:none; transition:.25s; z-index:100; }
.toast.show { opacity:1; transform:translateX(-50%) translateY(0); }
@media (max-width:1100px) { .stats-grid { grid-template-columns:repeat(2,1fr); } .fav-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:900px) { .sidebar { display:none; } .inbox-wrap { flex-direction:column; } .mail-side { width:100%; } .price-grid { grid-template-columns:1fr; } }
@media (max-width:620px) { .stats-grid, .fav-grid { grid-template-columns:1fr; } .search { display:none; } .user-meta { display:none; } .banner { padding:28px 50px; } .mail-from { width:80px; } .mail-tag { display:none; } }
</style>
