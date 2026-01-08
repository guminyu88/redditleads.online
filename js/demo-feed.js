// demo-feed.js - Simulates live Reddit monitoring

const mockData = [
    { sub: "SaaS", title: "Looking for an alternative to Mailchimp", severity: 9, intent: "Switch", time: "Just now" },
    { sub: "Entrepreneur", title: "How do I validate my idea?", severity: 4, intent: "Info", time: "2m ago" },
    { sub: "marketing", title: "Ads are getting too expensive...", severity: 7, intent: "Pain", time: "5m ago" },
    { sub: "SideProject", title: "Launched my AI tool today!", severity: 3, intent: "Promo", time: "8m ago" },
    { sub: "IndieDev", title: "Stripe fees are killing my margin", severity: 8, intent: "Complaint", time: "12m ago" },
    { sub: "webdev", title: "Why is Next.js so complicated?", severity: 6, intent: "Rant", time: "15m ago" },
    { sub: "smallbusiness", title: "Need a CRM for construction biz", severity: 9, intent: "Buy", time: "18m ago" },
    { sub: "startups", title: "Is anyone profitable yet?", severity: 5, intent: "Info", time: "22m ago" }
];

function createCard(item) {
    const el = document.createElement('div');
    el.className = "bg-white p-3 rounded-lg border border-gray-100 shadow-sm mb-3 transform transition-all duration-500 animate-slide-in";
    el.innerHTML = `
        <div class="flex justify-between items-center mb-1">
            <span class="text-[10px] font-mono text-gray-500 bg-gray-100 px-1 rounded">r/${item.sub}</span>
            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${
                item.severity >= 8 ? 'bg-red-100 text-red-800' : 
                item.severity >= 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
            }">Sev ${item.severity}</span>
        </div>
        <h4 class="text-xs font-medium text-gray-900 leading-snug mb-2">${item.title}</h4>
        <div class="flex items-center gap-2">
            <span class="text-[10px] uppercase tracking-wide bg-gray-50 px-1 rounded text-gray-500 border border-gray-100">${item.intent}</span>
            <span class="text-[10px] text-gray-400 ml-auto">${item.time}</span>
        </div>
    `;
    return el;
}

function startDemoFeed() {
    const container = document.getElementById('demo-feed-container');
    if (!container) return;

    let index = 0;

    function addNext() {
        const item = mockData[index % mockData.length];
        const card = createCard(item);
        
        container.insertBefore(card, container.firstChild);
        
        // Keep list clean
        if (container.children.length > 5) {
            container.lastChild.remove();
        }

        index++;
        
        // Random delay for "real-time" feel
        setTimeout(addNext, Math.random() * 2000 + 1500);
    }

    addNext();
}

document.addEventListener('DOMContentLoaded', startDemoFeed);
