const DB_KEY = 'calibrationPortalData';
const SQL_DB_KEY = 'calibrationPortalSql';
const SQL_WASM_URL = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.wasm';
const SQL_JS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js';

const sampleData = {
    customers: [
        { id: 'C001', name: 'ABC Manufacturing', industry: 'Automotive', contact: 'Ravi Patel', email: 'ravi@abc-mfg.com', phone: '+91 98765 43210', plants: 3, contractStatus: 'Active' },
        { id: 'C002', name: 'Global Pharma', industry: 'Pharmaceutical', contact: 'Meera Jain', email: 'meera@globalpharma.com', phone: '+91 91234 56789', plants: 2, contractStatus: 'Active' },
        { id: 'C003', name: 'Green Energy', industry: 'Renewables', contact: 'Amit Shah', email: 'amit@greenenergy.com', phone: '+91 99876 54321', plants: 1, contractStatus: 'Renewal Due' }
    ],
    plants: [
        { id: 'P001', name: 'Plant A - Pune', location: 'Pune, India', status: 'Online', equipment: 42 },
        { id: 'P002', name: 'Plant B - Mumbai', location: 'Mumbai, India', status: 'Online', equipment: 36 },
        { id: 'P003', name: 'Plant C - Jaipur', location: 'Jaipur, India', status: 'Maintenance', equipment: 28 }
    ],
    equipment: [
        { id: 'E001', name: 'Pressure Gauge PG-789', model: 'PG-789', plant: 'Plant A - Pune', status: 'Calibrated', lastCalibration: '2024-03-01' },
        { id: 'E002', name: 'Thermocouple TC-112', model: 'TC-112', plant: 'Plant B - Mumbai', status: 'Due', lastCalibration: '2023-10-18' },
        { id: 'E003', name: 'Multimeter MM-420', model: 'MM-420', plant: 'Plant C - Jaipur', status: 'Calibrated', lastCalibration: '2024-01-28' }
    ],
    calibrations: [
        { id: 'CAL-101', equipment: 'Pressure Gauge PG-789', dueDate: '2024-04-01', priority: 'High', status: 'Scheduled' },
        { id: 'CAL-102', equipment: 'Thermocouple TC-112', dueDate: '2024-04-10', priority: 'Medium', status: 'Pending' },
        { id: 'CAL-103', equipment: 'Multimeter MM-420', dueDate: '2024-04-15', priority: 'Low', status: 'Pending' }
    ],
    serviceRequests: [
        { id: 'SR-452', title: 'Temperature controller maintenance', status: 'Completed', assignedTo: 'John Doe', priority: 'Medium', createdAt: '2024-03-20' },
        { id: 'SR-453', title: 'Valve leak inspection', status: 'Open', assignedTo: 'Suresh Kumar', priority: 'High', createdAt: '2024-03-25' },
        { id: 'SR-454', title: 'Filter replacement', status: 'In Progress', assignedTo: 'Priya Singh', priority: 'Low', createdAt: '2024-03-28' }
    ],
    purchaseRequests: [
        { id: 'PR-210', item: 'Calibration standard kit', quantity: 2, status: 'Approved', requestedBy: 'Maintenance Team', requestedAt: '2024-03-18' },
        { id: 'PR-211', item: 'Replacement probes', quantity: 12, status: 'Pending', requestedBy: 'Plant B', requestedAt: '2024-03-22' }
    ],
    documents: [
        { id: 'D001', title: 'Calibration Certificate - PG-789', type: 'Certificate', uploadedAt: '2024-03-02', owner: 'QA Team' },
        { id: 'D002', title: 'Service Report - SR-452', type: 'Service Report', uploadedAt: '2024-03-21', owner: 'Field Team' }
    ],
    users: [
        { id: 'U001', name: 'John Doe', role: 'System Administrator', email: 'john.doe@calportal.com', status: 'Active' },
        { id: 'U002', name: 'Priya Singh', role: 'Field Technician', email: 'priya.singh@calportal.com', status: 'Active' },
        { id: 'U003', name: 'Suresh Kumar', role: 'Service Manager', email: 'suresh.kumar@calportal.com', status: 'Active' }
    ],
    notifications: [
        { id: 'N001', title: 'High Priority Calibration Due', description: 'Pressure gauge #PG-789 at Plant A requires calibration by tomorrow. Last calibrated 11 months ago.', icon: 'exclamation-triangle', badge: 'Urgent', badgeClass: 'status-high', time: '2 hours ago', accent: 'rgba(255, 107, 107, 0.1)', color: '#ff6b6b' },
        { id: 'N002', title: 'Service Request Completed', description: 'Service request #SR-452 for temperature controller maintenance has been completed by technician John Doe.', icon: 'clipboard-check', badge: 'Completed', badgeClass: 'status-low', time: '5 hours ago', accent: 'rgba(76, 201, 240, 0.1)', color: '#4cc9f0' },
        { id: 'N003', title: 'New Equipment Received', description: '5 new multimeters have been received and added to inventory. Serial numbers recorded and ready for deployment.', icon: 'shipping-fast', badge: 'Inventory', badgeClass: 'status-low', time: 'Yesterday', accent: 'rgba(72, 187, 120, 0.1)', color: '#48bb78' },
        { id: 'N004', title: 'Contract Renewal Reminder', description: 'Service contract with ABC Manufacturing expires in 30 days. Please contact the client for renewal discussions.', icon: 'file-contract', badge: 'Action Required', badgeClass: 'status-medium', time: '2 days ago', accent: 'rgba(246, 173, 85, 0.1)', color: '#f6ad55' }
    ]
};

const pages = {
    dashboard: { title: 'Calibration Maintenance Portal', file: 'index.html' },
    customer: { title: 'Customer Management', file: 'customer.html' },
    plant: { title: 'Plant Management', file: 'plant.html' },
    equipment: { title: 'Equipment Management', file: 'equipment.html' },
    calibration: { title: 'Calibration Management', file: 'calibration.html' },
    service: { title: 'Service & Maintenance', file: 'service.html' },
    installation: { title: 'Installation & Commissioning', file: 'installation.html' },
    procurement: { title: 'Procurement & Inventory', file: 'procurement.html' },
    document: { title: 'Document Management', file: 'document.html' },
    analytics: { title: 'Analytics & Reporting', file: 'analytics.html' },
    'user-management': { title: 'User & Role Management', file: 'user-management.html' },
};

const state = {
    db: null,
    sql: null,
};

const editState = {
    entity: null,
    id: null,
};

const elements = {
    loadingScreen: document.getElementById('loadingScreen'),
    themeToggle: document.getElementById('themeToggle'),
    menuToggle: document.getElementById('menuToggle'),
    sidebar: document.getElementById('sidebar'),
    sidebarSearch: document.getElementById('sidebarSearch'),
    fab: document.getElementById('fab'),
    userProfile: document.getElementById('userProfile'),
    pageContent: document.getElementById('pageContent'),
};

const currentPage = document.body.dataset.page || 'dashboard';
let quickActionsMenu = null;
let searchTimeout;
let resizeTimeout;

window.addEventListener('load', async () => {
    setTimeout(async () => {
        elements.loadingScreen.classList.add('hidden');
        await initializeSqlDatabase();
        initializeTheme();
        initializeNav();
        renderCurrentPage();
        animateOnScroll();
        initializeProgressAnimations();
    }, 400);
});

elements.themeToggle?.addEventListener('click', (event) => {
    toggleTheme();
    pressEffect(event.currentTarget);
});
elements.menuToggle?.addEventListener('click', (event) => {
    toggleSidebar();
    pressEffect(event.currentTarget);
});
elements.fab?.addEventListener('click', (event) => {
    toggleQuickActions();
    pressEffect(event.currentTarget);
});
elements.userProfile?.addEventListener('click', (event) => {
    showNotification('Opening user profile settings...', 'info');
    pressEffect(event.currentTarget);
});
elements.sidebarSearch?.addEventListener('input', (event) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => performSearch(event.target.value), 250);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (quickActionsMenu) removeQuickActions();
        if (window.innerWidth <= 1200 && elements.sidebar.classList.contains('open')) toggleSidebar();
    }
});

const quickCardRoutes = {
    'new-calibration': 'calibration.html',
    'service-request': 'service.html',
    'view-reports': 'analytics.html',
    'equipment-check': 'equipment.html',
};

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 1200 && elements.sidebar.classList.contains('open')) {
            elements.sidebar.classList.remove('open');
            document.body.style.overflow = '';
        }
    }, 250);
});

document.addEventListener('click', (event) => {
    const quickCard = event.target.closest('.quick-link-card');
    if (quickCard) {
        const action = quickCard.dataset.quickAction;
        const target = quickCardRoutes[action];
        if (target) {
            showNotification('Opening quick action...', 'info');
            window.location.href = target;
            return;
        }
    }

    const submenuLink = event.target.closest('.submenu-link');
    if (submenuLink) {
        event.preventDefault();
        showNotification(`Opening ${submenuLink.textContent.trim()}...`, 'info');
        return;
    }

    if (!quickActionsMenu || quickActionsMenu.contains(event.target) || event.target === elements.fab) return;
    removeQuickActions();
});

async function initializeSqlDatabase() {
    if (state.db) return;
    if (typeof initSqlJs !== 'function') {
        throw new Error('SQL.js library is not loaded. Add the SQL.js script before app.js.');
    }

    state.sql = await initSqlJs({ locateFile: () => SQL_WASM_URL });
    const savedDb = localStorage.getItem(SQL_DB_KEY);
    if (savedDb) {
        state.db = new state.sql.Database(base64ToUint8Array(savedDb));
    } else {
        state.db = new state.sql.Database();
        createSqlSchema();
        seedSqlDatabase();
        persistSqlDatabase();
    }
}

function createSqlSchema() {
    const schemaStatements = [
        `CREATE TABLE IF NOT EXISTS customers (id TEXT PRIMARY KEY, name TEXT, industry TEXT, contact TEXT, email TEXT, phone TEXT, plants INTEGER, contractStatus TEXT);`,
        `CREATE TABLE IF NOT EXISTS plants (id TEXT PRIMARY KEY, name TEXT, location TEXT, status TEXT, equipment INTEGER);`,
        `CREATE TABLE IF NOT EXISTS equipment (id TEXT PRIMARY KEY, name TEXT, model TEXT, plant TEXT, status TEXT, lastCalibration TEXT);`,
        `CREATE TABLE IF NOT EXISTS calibrations (id TEXT PRIMARY KEY, equipment TEXT, dueDate TEXT, priority TEXT, status TEXT);`,
        `CREATE TABLE IF NOT EXISTS serviceRequests (id TEXT PRIMARY KEY, title TEXT, status TEXT, assignedTo TEXT, priority TEXT, createdAt TEXT);`,
        `CREATE TABLE IF NOT EXISTS purchaseRequests (id TEXT PRIMARY KEY, item TEXT, quantity INTEGER, status TEXT, requestedBy TEXT, requestedAt TEXT);`,
        `CREATE TABLE IF NOT EXISTS documents (id TEXT PRIMARY KEY, title TEXT, type TEXT, uploadedAt TEXT, owner TEXT);`,
        `CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT, role TEXT, email TEXT, status TEXT);`,
        `CREATE TABLE IF NOT EXISTS notifications (id TEXT PRIMARY KEY, title TEXT, description TEXT, icon TEXT, badge TEXT, badgeClass TEXT, time TEXT, accent TEXT, color TEXT);`,
    ];

    schemaStatements.forEach((sql) => runSql(sql));
}

function seedSqlDatabase() {
    insertMany('customers', sampleData.customers);
    insertMany('plants', sampleData.plants);
    insertMany('equipment', sampleData.equipment);
    insertMany('calibrations', sampleData.calibrations);
    insertMany('serviceRequests', sampleData.serviceRequests);
    insertMany('purchaseRequests', sampleData.purchaseRequests);
    insertMany('documents', sampleData.documents);
    insertMany('users', sampleData.users);
    insertMany('notifications', sampleData.notifications);
}

function persistSqlDatabase() {
    const data = state.db.export();
    localStorage.setItem(SQL_DB_KEY, uint8ArrayToBase64(data));
}

function base64ToUint8Array(base64) {
    const raw = atob(base64);
    const array = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i += 1) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

function uint8ArrayToBase64(uint8Array) {
    let binary = '';
    const len = uint8Array.byteLength;
    for (let i = 0; i < len; i += 1) {
        binary += String.fromCharCode(uint8Array[i]);
    }
    return btoa(binary);
}

function runSql(sql, params = []) {
    if (!state.db) return null;
    try {
        if (!params.length) {
            const result = state.db.exec(sql);
            if (!result || !result[0]) return [];
            const columns = result[0].columns;
            return result[0].values.map((row) => {
                const rowObject = {};
                row.forEach((value, index) => {
                    rowObject[columns[index]] = value;
                });
                return rowObject;
            });
        }

        const statement = state.db.prepare(sql);
        statement.bind(params);
        const rows = [];
        while (statement.step()) {
            rows.push(statement.getAsObject());
        }
        statement.free();
        return rows;
    } catch (error) {
        console.error('SQL execution error:', sql, params, error);
        return null;
    }
}

function queryRows(sql, params = []) {
    const result = runSql(sql, params);
    return Array.isArray(result) ? result : [];
}

function insertMany(table, records) {
    records.forEach((record) => insertRecord(table, record, false));
}

function insertRecord(table, record, persist = true) {
    const columns = Object.keys(record).join(', ');
    const placeholders = Object.keys(record).map(() => '?').join(', ');
    const values = Object.values(record);
    runSql(`INSERT OR REPLACE INTO ${table} (${columns}) VALUES (${placeholders});`, values);
    if (persist) persistSqlDatabase();
}

function deleteRecord(table, id) {
    runSql(`DELETE FROM ${table} WHERE id = ?;`, [id]);
    persistSqlDatabase();
}

function getAll(table) {
    return queryRows(`SELECT * FROM ${table} ORDER BY id ASC;`);
}

function getTableCount(table) {
    const result = queryRows(`SELECT COUNT(*) AS count FROM ${table};`);
    return result.length ? result[0].count : 0;
}

function addCustomer(data) {
    insertRecord('customers', data);
    showNotification('Customer added successfully.', 'success');
    renderCurrentPage();
}

function addPlant(data) {
    insertRecord('plants', data);
    showNotification('Plant added successfully.', 'success');
    renderCurrentPage();
}

function addEquipment(data) {
    insertRecord('equipment', data);
    showNotification('Equipment added successfully.', 'success');
    renderCurrentPage();
}

function renderCurrentPage() {
    if (!elements.pageContent) return;
    const renderMap = {
        dashboard: renderDashboard,
        customer: renderCustomerPage,
        plant: renderPlantPage,
        equipment: renderEquipmentPage,
        calibration: renderCalibrationPage,
        service: renderServicePage,
        installation: renderInstallationPage,
        procurement: renderProcurementPage,
        document: renderDocumentPage,
        analytics: renderAnalyticsPage,
        'user-management': renderUserManagementPage,
    };
    const pageRenderer = renderMap[currentPage] || renderDashboard;
    pageRenderer();
}

function initializeNav() {
    document.querySelectorAll('.nav-link').forEach((link) => {
        const pageId = link.dataset.pageId;
        if (pageId === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function toggleQuickActions() {
    if (quickActionsMenu) {
        removeQuickActions();
        return;
    }

    quickActionsMenu = document.createElement('div');
    quickActionsMenu.className = 'quick-actions-menu';
    quickActionsMenu.innerHTML = `
        <button class="quick-action-item" data-quick-action="new-calibration">New Calibration</button>
        <button class="quick-action-item" data-quick-action="service-request">Service Request</button>
        <button class="quick-action-item" data-quick-action="view-reports">View Reports</button>
        <button class="quick-action-item" data-quick-action="equipment-check">Equipment Status</button>
    `;
    quickActionsMenu.addEventListener('click', (event) => {
        const actionButton = event.target.closest('.quick-action-item');
        if (!actionButton) return;
        const action = actionButton.dataset.quickAction;
        const target = quickCardRoutes[action];
        if (target) {
            window.location.href = target;
        }
    });
    document.body.appendChild(quickActionsMenu);
}

function removeQuickActions() {
    if (quickActionsMenu) {
        quickActionsMenu.remove();
        quickActionsMenu = null;
    }
}

function renderDashboard() {
    const totalCustomers = getTableCount('customers');
    const totalPlants = getTableCount('plants');
    const totalEquipment = getTableCount('equipment');
    const openService = queryRows(`SELECT COUNT(*) AS count FROM serviceRequests WHERE status != 'Completed';`)[0].count;
    const dueEquipment = queryRows(`SELECT COUNT(*) AS count FROM equipment WHERE status = 'Due';`)[0].count;
    const notifications = getAll('notifications');

    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section">
                <h2>Welcome to Calibration Portal</h2>
                <p>Manage all calibration, maintenance, and equipment tracking activities from a single platform. Monitor KPIs, track service requests, and ensure compliance with industry standards.</p>
            </section>
            <section class="quick-links animate-on-scroll">
                ${quickCard('new-calibration', 'fa-ruler-combined', 'Log New Calibration', 'Record a new calibration reading')}
                ${quickCard('service-request', 'fa-tools', 'Create Service Request', 'Submit new maintenance request')}
                ${quickCard('view-reports', 'fa-chart-bar', 'View Reports', 'Access analytics and reports')}
                ${quickCard('equipment-check', 'fa-cogs', 'Equipment Status', 'Check equipment calibration status')}
            </section>
            <div class="dashboard-widgets animate-on-scroll">
                ${widget('Upcoming Calibrations', 'fa-calendar-alt', `You have <strong>${getTableCount('calibrations')}</strong> scheduled calibrations.`, 78, [{value: getTableCount('calibrations'), label: 'Total'}, {value: 3, label: 'High Priority'}, {value: 7, label: 'On Schedule'}])}
                ${widget('Open Service Requests', 'fa-tools', `There are <strong>${openService}</strong> open service requests.`, 92, [{value: openService, label: 'Open'}, {value: 24, label: 'This Month'}, {value: '2.1', label: 'Avg. Days'}])}
                ${widget('Equipment Status', 'fa-cogs', `<strong>94%</strong> of equipment is active and calibrated.`, 94, [{value: totalEquipment, label: 'Tracked'}, {value: '22', label: 'Retired'}, {value: dueEquipment, label: 'Needs Attention'}])}
            </div>
            <div class="notifications-section animate-on-scroll">
                <h3 class="section-title"><i class="fas fa-bell"></i>Notifications and Alerts</h3>
                <ul class="notification-list">
                    ${notifications.map(alert => notificationItem(alert)).join('')}
                </ul>
            </div>
        </div>
    `;
}

function quickCard(action, icon, title, description) {
    return `<div class="quick-link-card" data-quick-action="${action}" tabindex="0" role="button">
            <div class="quick-link-icon"><i class="fas ${icon}"></i></div>
            <h3>${title}</h3>
            <p>${description}</p>
        </div>`;
}

function widget(title, icon, content, percent, stats = []) {
    return `<div class="widget animate-on-scroll">
            <div class="widget-header">
                <h3 class="widget-title">${title}</h3>
                <div class="widget-icon"><i class="fas ${icon}"></i></div>
            </div>
            <div class="widget-content"><p>${content}</p></div>
            <div class="progress-container">
                <div class="progress-label"><span>Completion Rate</span><span>${percent}%</span></div>
                <div class="progress-bar"><div class="progress-fill" style="width: ${percent}%;"></div></div>
            </div>
            <div class="stats">${stats.map(stat => `<div class="stat"><div class="stat-value">${stat.value}</div><div class="stat-label">${stat.label}</div></div>`).join('')}</div>
        </div>`;
}

function notificationItem(item) {
    return `<li class="notification-item">
                <div class="notification-icon" style="background: ${item.accent}; color: ${item.color};"><i class="fas fa-${item.icon}"></i></div>
                <div class="notification-content">
                    <h4>${item.title} <span class="status-badge ${item.badgeClass}">${item.badge}</span></h4>
                    <p>${item.description}</p>
                    <div class="notification-time"><i class="far fa-clock"></i>${item.time}</div>
                </div>
            </li>`;
}

function renderCustomerPage() {
    const customers = getAll('customers');
    const editing = editState.entity === 'customer' ? getById('customers', editState.id) : null;
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Customer Management</h2><p>Manage customer information, contracts, and service agreements in one centralized location.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Customers', customers.length, 'Active customer accounts')}
                ${summaryCard('Plants linked', getTableCount('plants'), 'Tracked plant locations')}
                ${summaryCard('Service agreements', 12, 'Active agreements')}
            </div>
            <div class="card animate-on-scroll">
                <h3>${editing ? 'Edit Customer' : 'Add New Customer'}</h3>
                <form id="customerForm" class="data-form">
                    <input type="hidden" id="customerOriginalId" value="${editing ? editing.id : ''}" />
                    ${formRow('Customer ID', 'customerId', editing ? editing.id : 'C004')}
                    ${formRow('Name', 'customerName', editing ? editing.name : 'Example Company')}
                    ${formRow('Industry', 'customerIndustry', editing ? editing.industry : 'Manufacturing')}
                    ${formRow('Contact', 'customerContact', editing ? editing.contact : 'Name Here')}
                    ${formRow('Email', 'customerEmail', editing ? editing.email : 'email@example.com', 'email')}
                    ${formRow('Phone', 'customerPhone', editing ? editing.phone : '+91 12345 67890', 'tel')}
                    ${formRow('Plants', 'customerPlants', editing ? editing.plants : '1', 'number')}
                    ${formRow('Contract Status', 'customerStatus', editing ? editing.contractStatus : 'Active')}
                    <div class="button-row">
                        <button type="submit" class="primary">${editing ? 'Update Customer' : 'Save Customer'}</button>
                        ${editing ? '<button type="button" class="secondary cancel-edit" data-entity="customer">Cancel</button>' : ''}
                    </div>
                </form>
            </div>
            <div class="card animate-on-scroll">
                <h3>Customer Directory</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Name</th><th>Industry</th><th>Contact</th><th>Email</th><th>Phone</th><th>Status</th><th>Action</th></tr></thead><tbody>${customers.map(customer => `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.industry}</td><td>${customer.contact}</td><td>${customer.email}</td><td>${customer.phone}</td><td>${customer.contractStatus}</td><td><button class="secondary edit-button" data-table="customers" data-id="${customer.id}">Edit</button><button class="secondary delete-button" data-table="customers" data-id="${customer.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
    bindFormHandlers();
}

function renderPlantPage() {
    const plants = getAll('plants');
    const editing = editState.entity === 'plant' ? getById('plants', editState.id) : null;
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Plant Management</h2><p>Track plant locations, assigned equipment, and site-specific documentation.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Plants', plants.length, 'Operational locations')}
                ${summaryCard('Equipment items', getTableCount('equipment'), 'Assets monitored')}
                ${summaryCard('Maintenance alerts', 4, 'Pending site actions')}
            </div>
            <div class="card animate-on-scroll">
                <h3>${editing ? 'Edit Plant' : 'Add New Plant'}</h3>
                <form id="plantForm" class="data-form">
                    <input type="hidden" id="plantOriginalId" value="${editing ? editing.id : ''}" />
                    ${formRow('Plant ID', 'plantId', editing ? editing.id : 'P004')}
                    ${formRow('Name', 'plantName', editing ? editing.name : 'Plant D - Delhi')}
                    ${formRow('Location', 'plantLocation', editing ? editing.location : 'Delhi, India')}
                    ${formRow('Status', 'plantStatus', editing ? editing.status : 'Online')}
                    ${formRow('Equipment Count', 'plantEquipment', editing ? editing.equipment : '0', 'number')}
                    <div class="button-row">
                        <button type="submit" class="primary">${editing ? 'Update Plant' : 'Save Plant'}</button>
                        ${editing ? '<button type="button" class="secondary cancel-edit" data-entity="plant">Cancel</button>' : ''}
                    </div>
                </form>
            </div>
            <div class="card animate-on-scroll">
                <h3>Plant Overview</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Name</th><th>Location</th><th>Status</th><th>Equipment</th><th>Action</th></tr></thead><tbody>${plants.map(plant => `<tr><td>${plant.id}</td><td>${plant.name}</td><td>${plant.location}</td><td>${plant.status}</td><td>${plant.equipment}</td><td><button class="secondary edit-button" data-table="plants" data-id="${plant.id}">Edit</button><button class="secondary delete-button" data-table="plants" data-id="${plant.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
    bindFormHandlers();
}

function renderEquipmentPage() {
    const equipmentList = getAll('equipment');
    const editing = editState.entity === 'equipment' ? getById('equipment', editState.id) : null;
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Equipment Management</h2><p>Monitor equipment lifecycle, service history, and calibration status across all assets.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Calibrated', equipmentList.filter(item => item.status === 'Calibrated').length, 'Equipment items ready')}
                ${summaryCard('Due soon', equipmentList.filter(item => item.status === 'Due').length, 'Needs calibration')}
                ${summaryCard('Total assets', equipmentList.length, 'Tracked devices')}
            </div>
            <div class="card animate-on-scroll">
                <h3>${editing ? 'Edit Equipment' : 'Add New Equipment'}</h3>
                <form id="equipmentForm" class="data-form">
                    <input type="hidden" id="equipmentOriginalId" value="${editing ? editing.id : ''}" />
                    ${formRow('Equipment ID', 'equipmentId', editing ? editing.id : 'E004')}
                    ${formRow('Name', 'equipmentName', editing ? editing.name : 'New Sensor Device')}
                    ${formRow('Model', 'equipmentModel', editing ? editing.model : 'ED-500')}
                    ${formRow('Plant', 'equipmentPlant', editing ? editing.plant : 'Plant A - Pune')}
                    ${formRow('Status', 'equipmentStatus', editing ? editing.status : 'Calibrated')}
                    ${formRow('Last Calibration', 'equipmentCalibration', editing ? editing.lastCalibration : '2024-03-29', 'date')}
                    <div class="button-row">
                        <button type="submit" class="primary">${editing ? 'Update Equipment' : 'Save Equipment'}</button>
                        ${editing ? '<button type="button" class="secondary cancel-edit" data-entity="equipment">Cancel</button>' : ''}
                    </div>
                </form>
            </div>
            <div class="card animate-on-scroll">
                <h3>Equipment Inventory</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Name</th><th>Model</th><th>Plant</th><th>Status</th><th>Last Calibration</th><th>Action</th></tr></thead><tbody>${equipmentList.map(item => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.model}</td><td>${item.plant}</td><td>${item.status}</td><td>${item.lastCalibration}</td><td><button class="secondary edit-button" data-table="equipment" data-id="${item.id}">Edit</button><button class="secondary delete-button" data-table="equipment" data-id="${item.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
    bindFormHandlers();
}

function renderCalibrationPage() {
    const calibrations = getAll('calibrations');
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Calibration Management</h2><p>Schedule, track, and record all calibration activities with certification management.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Scheduled', calibrations.filter(item => item.status !== 'Completed').length, 'Calibrations pending')}
                ${summaryCard('Completed', calibrations.filter(item => item.status === 'Completed').length, 'Finished calibrations')}
                ${summaryCard('Equipment due', getTableCount('equipment') > 0 ? queryRows(`SELECT COUNT(*) AS count FROM equipment WHERE status = 'Due';`)[0].count : 0, 'Needs attention')}
            </div>
            <div class="card animate-on-scroll">
                <h3>Calibration Schedule</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Equipment</th><th>Due Date</th><th>Priority</th><th>Status</th></tr></thead><tbody>${calibrations.map(item => `<tr><td>${item.id}</td><td>${item.equipment}</td><td>${item.dueDate}</td><td>${item.priority}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
}

function renderServicePage() {
    const serviceRequests = getAll('serviceRequests');
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Service & Maintenance</h2><p>Handle service requests, maintenance logs, and repair history tracking.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Open requests', serviceRequests.filter(item => item.status !== 'Completed').length, 'Needs attention')}
                ${summaryCard('Completed', serviceRequests.filter(item => item.status === 'Completed').length, 'Finished tasks')}
                ${summaryCard('Active technicians', getTableCount('users'), 'Available staff')}
            </div>
            <div class="card animate-on-scroll">
                <h3>Recent Service Requests</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Title</th><th>Status</th><th>Assigned To</th><th>Priority</th><th>Created</th></tr></thead><tbody>${serviceRequests.map(item => `<tr><td>${item.id}</td><td>${item.title}</td><td>${item.status}</td><td>${item.assignedTo}</td><td>${item.priority}</td><td>${item.createdAt}</td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
}

function renderInstallationPage() {
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Installation & Commissioning</h2><p>Manage installation projects, commissioning reports, and field technician assignments.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Projects', 7, 'Active installations')}
                ${summaryCard('Reports', 14, 'Commissioning documents')}
                ${summaryCard('Technicians', 5, 'Assigned field staff')}
            </div>
            <div class="card animate-on-scroll">
                <h3>Installation Overview</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>Project</th><th>Status</th><th>Site</th><th>Lead Technician</th><th>Expected Finish</th></tr></thead><tbody>
                    <tr><td>Plant Upgrade - Pune</td><td>In Progress</td><td>Pune</td><td>Priya Singh</td><td>2024-05-10</td></tr>
                    <tr><td>Commissioning - Mumbai</td><td>Planned</td><td>Mumbai</td><td>Suresh Kumar</td><td>2024-05-22</td></tr>
                    <tr><td>Site Setup - Jaipur</td><td>Completed</td><td>Jaipur</td><td>John Doe</td><td>2024-03-30</td></tr>
                </tbody></table></div>
            </div>
        </div>
    `;
}

function renderProcurementPage() {
    const purchaseRequests = getAll('purchaseRequests');
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Procurement & Inventory</h2><p>Handle purchase requests, manage inventory levels, and track spare parts.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Purchase requests', purchaseRequests.length, 'Requests tracked')}
                ${summaryCard('Pending approvals', purchaseRequests.filter(item => item.status === 'Pending').length, 'Waiting for review')}
                ${summaryCard('Approved items', purchaseRequests.filter(item => item.status === 'Approved').length, 'Ready to order')}
            </div>
            <div class="card animate-on-scroll">
                <h3>Purchase Requests</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Item</th><th>Qty</th><th>Status</th><th>Requested By</th><th>Date</th></tr></thead><tbody>${purchaseRequests.map(item => `<tr><td>${item.id}</td><td>${item.item}</td><td>${item.quantity}</td><td>${item.status}</td><td>${item.requestedBy}</td><td>${item.requestedAt}</td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
}

function renderDocumentPage() {
    const documents = getAll('documents');
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Document Management</h2><p>Centralized document storage with access control and client portal capabilities.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Documents', documents.length, 'Files stored')}
                ${summaryCard('Certificates', 15, 'Calibration certificates')}
                ${summaryCard('Reports', 8, 'Service and compliance reports')}
            </div>
            <div class="card animate-on-scroll">
                <h3>Document Library</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Title</th><th>Type</th><th>Uploaded</th><th>Owner</th></tr></thead><tbody>${documents.map(item => `<tr><td>${item.id}</td><td>${item.title}</td><td>${item.type}</td><td>${item.uploadedAt}</td><td>${item.owner}</td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
}

function renderAnalyticsPage() {
    const openRequests = queryRows(`SELECT COUNT(*) AS count FROM serviceRequests WHERE status != 'Completed';`)[0].count;
    const pendingPurchases = queryRows(`SELECT COUNT(*) AS count FROM purchaseRequests WHERE status = 'Pending';`)[0].count;
    const activeUsers = getTableCount('users');
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>Analytics & Reporting</h2><p>Generate custom reports, analyze trends, and monitor KPIs for continuous improvement.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Customers', getTableCount('customers'), 'Active accounts')}
                ${summaryCard('Open requests', openRequests, 'Pending work')}
                ${summaryCard('Pending purchases', pendingPurchases, 'Awaiting approval')}
                ${summaryCard('Active users', activeUsers, 'System users')}
            </div>
            <div class="card animate-on-scroll">
                <h3>Performance Snapshot</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>Metric</th><th>Value</th><th>Notes</th></tr></thead><tbody>
                    <tr><td>Scheduled Calibrations</td><td>${getTableCount('calibrations')}</td><td>Next 30 days</td></tr>
                    <tr><td>Completed Service Requests</td><td>${queryRows(`SELECT COUNT(*) AS count FROM serviceRequests WHERE status = 'Completed';`)[0].count}</td><td>Latest updates</td></tr>
                    <tr><td>Documents</td><td>${getTableCount('documents')}</td><td>Tracked records</td></tr>
                    <tr><td>Inventory Requests</td><td>${getTableCount('purchaseRequests')}</td><td>Procurement overview</td></tr>
                </tbody></table></div>
            </div>
        </div>
    `;
}

function renderUserManagementPage() {
    const users = getAll('users');
    elements.pageContent.innerHTML = `
        <div class="module-content animate-on-scroll">
            <section class="welcome-section"><h2>User & Role Management</h2><p>Manage user accounts, assign roles and permissions, and track system activity.</p></section>
            <div class="card-row animate-on-scroll">
                ${summaryCard('Users', users.length, 'Active user accounts')}
                ${summaryCard('Roles', 5, 'Configured permissions')}
                ${summaryCard('Audit logs', 24, 'Recent security events')}
            </div>
            <div class="card animate-on-scroll">
                <h3>User Directory</h3>
                <div class="table-wrapper"><table class="table"><thead><tr><th>ID</th><th>Name</th><th>Role</th><th>Email</th><th>Status</th></tr></thead><tbody>${users.map(item => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.role}</td><td>${item.email}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
            </div>
        </div>
    `;
}

function formRow(label, id, placeholder = '', type = 'text') {
    return `<div class="form-row"><label for="${id}">${label}</label><input id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" required /></div>`;
}

function summaryCard(title, value, subtitle) {
    return `<div class="card"><h3>${title}</h3><p style="font-size: 2rem; font-weight: 700; margin: 0.8rem 0;">${value}</p><p>${subtitle}</p></div>`;
}

function bindFormHandlers() {
    const customerForm = document.getElementById('customerForm');
    if (customerForm) {
        customerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const customerData = {
                id: event.target.customerId.value.trim(),
                name: event.target.customerName.value.trim(),
                industry: event.target.customerIndustry.value.trim(),
                contact: event.target.customerContact.value.trim(),
                email: event.target.customerEmail.value.trim(),
                phone: event.target.customerPhone.value.trim(),
                plants: Number(event.target.customerPlants.value.trim()),
                contractStatus: event.target.customerStatus.value.trim(),
            };
            if (editState.entity === 'customer' && editState.id) {
                updateCustomer(customerData, event.target.customerOriginalId.value.trim());
            } else {
                addCustomer(customerData);
            }
        });
    }

    const plantForm = document.getElementById('plantForm');
    if (plantForm) {
        plantForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const plantData = {
                id: event.target.plantId.value.trim(),
                name: event.target.plantName.value.trim(),
                location: event.target.plantLocation.value.trim(),
                status: event.target.plantStatus.value.trim(),
                equipment: Number(event.target.plantEquipment.value.trim()),
            };
            if (editState.entity === 'plant' && editState.id) {
                updatePlant(plantData, event.target.plantOriginalId.value.trim());
            } else {
                addPlant(plantData);
            }
        });
    }

    const equipmentForm = document.getElementById('equipmentForm');
    if (equipmentForm) {
        equipmentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const equipmentData = {
                id: event.target.equipmentId.value.trim(),
                name: event.target.equipmentName.value.trim(),
                model: event.target.equipmentModel.value.trim(),
                plant: event.target.equipmentPlant.value.trim(),
                status: event.target.equipmentStatus.value.trim(),
                lastCalibration: event.target.equipmentCalibration.value.trim(),
            };
            if (editState.entity === 'equipment' && editState.id) {
                updateEquipment(equipmentData, event.target.equipmentOriginalId.value.trim());
            } else {
                addEquipment(equipmentData);
            }
        });
    }

    document.querySelectorAll('.edit-button').forEach((button) => {
        button.addEventListener('click', () => {
            const table = button.dataset.table;
            const id = button.dataset.id;
            if (!table || !id) return;
            if (table === 'customers') prepareCustomerEdit(id);
            if (table === 'plants') preparePlantEdit(id);
            if (table === 'equipment') prepareEquipmentEdit(id);
        });
    });

    document.querySelectorAll('.cancel-edit').forEach((button) => {
        button.addEventListener('click', () => {
            clearEditState();
        });
    });

    document.querySelectorAll('.delete-button').forEach((button) => {
        button.addEventListener('click', (event) => {
            const table = button.dataset.table;
            const id = button.dataset.id;
            if (!table || !id) return;
            deleteRecord(table, id);
            showNotification(`${table.slice(0, -1)} deleted successfully.`, 'warning');
            clearEditState();
            renderCurrentPage();
        });
    });
}

function getById(table, id) {
    const rows = queryRows(`SELECT * FROM ${table} WHERE id = ?;`, [id]);
    return rows.length ? rows[0] : null;
}

function updateRecord(table, originalId, record) {
    if (!originalId || originalId === record.id) {
        insertRecord(table, record);
        return;
    }
    runSql(`DELETE FROM ${table} WHERE id = ?;`, [originalId]);
    insertRecord(table, record);
}

function clearEditState() {
    editState.entity = null;
    editState.id = null;
    renderCurrentPage();
}

function prepareCustomerEdit(id) {
    editState.entity = 'customer';
    editState.id = id;
    renderCustomerPage();
}

function preparePlantEdit(id) {
    editState.entity = 'plant';
    editState.id = id;
    renderPlantPage();
}

function prepareEquipmentEdit(id) {
    editState.entity = 'equipment';
    editState.id = id;
    renderEquipmentPage();
}

function updateCustomer(data, originalId) {
    updateRecord('customers', originalId, data);
    showNotification('Customer updated successfully.', 'success');
    clearEditState();
}

function updatePlant(data, originalId) {
    updateRecord('plants', originalId, data);
    showNotification('Plant updated successfully.', 'success');
    clearEditState();
}

function updateEquipment(data, originalId) {
    updateRecord('equipment', originalId, data);
    showNotification('Equipment updated successfully.', 'success');
    clearEditState();
}

function showNotification(message, type = 'info') {
    document.querySelectorAll('.notification-toast').forEach((toast) => toast.remove());
    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    toast.innerHTML = `<i class="fas fa-${getNotificationIcon(type)}"></i><span>${message}</span><i class="fas fa-times" role="button" aria-label="Close notification"></i>`;
    toast.querySelector('.fa-times').addEventListener('click', () => toast.remove());
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
}

function getNotificationIcon(type) {
    return ({ info: 'info-circle', success: 'check-circle', warning: 'exclamation-triangle', error: 'exclamation-circle' }[type] || 'info-circle');
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    const icon = isDark ? 'fas fa-sun' : 'fas fa-moon';
    const label = isDark ? 'Light Mode' : 'Dark Mode';
    elements.themeToggle.querySelector('i').className = icon;
    elements.themeToggle.querySelector('span').textContent = label;
    localStorage.setItem('portalTheme', isDark ? 'dark' : 'light');
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('portalTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        elements.themeToggle.querySelector('i').className = 'fas fa-sun';
        elements.themeToggle.querySelector('span').textContent = 'Light Mode';
    }
}

function toggleSidebar() {
    const isOpen = elements.sidebar.classList.toggle('open');
    document.body.style.overflow = isOpen && window.innerWidth <= 1200 ? 'hidden' : '';
    elements.menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
}

function performSearch(term) {
    const query = term.trim().toLowerCase();
    document.querySelectorAll('.nav-item').forEach((item) => {
        const mainText = item.querySelector('.nav-text')?.textContent.toLowerCase() || '';
        const matchesMain = mainText.includes(query);
        let hasMatch = matchesMain;
        item.querySelectorAll('.submenu-item').forEach((subItem) => {
            const subText = subItem.querySelector('.submenu-link')?.textContent.toLowerCase() || '';
            const match = subText.includes(query);
            subItem.style.display = match ? '' : 'none';
            if (match) hasMatch = true;
        });
        item.style.display = hasMatch || !query ? '' : 'none';
        const submenu = item.querySelector('.submenu');
        if (hasMatch && submenu) submenu.classList.add('expanded');
    });
}

function animateOnScroll() {
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        if (element.classList.contains('visible')) return;
        const observer = new IntersectionObserver((entries, observerRef) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observerRef.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        observer.observe(element);
    });
}

function initializeProgressAnimations() {
    document.querySelectorAll('.progress-fill').forEach((fill) => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => { fill.style.width = width; }, 300);
    });
}

function pressEffect(element) {
    if (!element) return;
    element.style.transform = 'scale(0.95)';
    setTimeout(() => { element.style.transform = ''; }, 150);
}
