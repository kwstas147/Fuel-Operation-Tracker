const fs = require('fs');

const details = {
    'el': {
        f1Detail: "Ολοκληρωμένη καταγραφή καυσίμων με αναλύσεις κόστους σε πραγματικό χρόνο, μοτίβα κατανάλωσης και αναλύσεις εξόδων ανά χιλιόμετρο. Παρακολουθήστε κάθε ανεφοδιασμό με ακρίβεια — από την τιμή ανά λίτρο έως τη συνολική δαπάνη — και αποκτήστε πρακτικές πληροφορίες για να βελτιστοποιήσετε τον προϋπολογισμό των καυσίμων σας.",
        f2Detail: "Ένας έξυπνος κόμβος συντήρησης που διατηρεί το όχημά σας σε άριστη κατάσταση. Προγραμματίστε αλλαγές λαδιών, ελαστικών, ελέγχους φρένων και άλλα με έξυπνες υπενθυμίσεις. Πλήρες ιστορικό σέρβις στα χέρια σας — μην χάσετε ποτέ ξανά σημαντική συντήρηση.",
        f3Detail: "Μετατρέψτε τα ανεξάρτητα δεδομένα σε ισχυρή οπτική νοημοσύνη. Διαδραστικά γραφήματα αποκαλύπτουν τάσεις κατανάλωσης, συγκρίσεις κόστους και μετρήσεις απόδοσης. Πάρτε αποφάσεις βάσει δεδομένων με επαγγελματικά αναλυτικά στοιχεία.",
        f4Detail: "Διαχειριστείτε απρόσκοπτα ολόκληρο τον στόλο σας από έναν πίνακα. Είτε έχετε δύο αυτοκίνητα είτε επαγγελματικό στόλο, κάντε εναλλαγή μεταξύ οχημάτων άμεσα με ενοποιημένα αναλυτικά στοιχεία και ανεξάρτητη παρακολούθηση για το καθένα.",
        f5Detail: "Προστασία εταιρικού επιπέδου με βιομετρικό έλεγχο ταυτότητας και κρυπτογράφηση SQLCipher AES-256 στρατιωτικών προδιαγραφών. Τα ευαίσθητα δεδομένα σας παραμένουν απολύτως ασφαλή — προσβάσιμα μόνο από εσάς.",
        f6Detail: "Ο εύκολος συγχρονισμός cloud μέσω Google Drive διασφαλίζει ότι τα δεδομένα σας ταξιδεύουν μαζί σας. Τα αυτόματα κρυπτογραφημένα αντίγραφα ασφαλείας προστατεύουν από απώλεια, διατηρώντας τα πάντα ενημερωμένα σε όλες τις πλατφόρμες σας."
    },
    'en': {
        f1Detail: "Comprehensive fuel logging with real-time cost analytics, consumption patterns, and per-kilometer expense breakdowns. Track every fill-up with precision and gain actionable insights to optimize your fuel budget.",
        f2Detail: "A smart maintenance hub that keeps your vehicle in peak condition. Schedule oil changes, tire rotations, brake inspections, and more with intelligent reminders. Full service history at your fingertips.",
        f3Detail: "Transform raw data into powerful visual intelligence. Interactive charts and graphs reveal consumption trends, cost comparisons, and efficiency metrics over custom time periods.",
        f4Detail: "Seamlessly manage your entire fleet from a single dashboard. Whether you own two cars or operate a commercial fleet, switch between vehicles instantly with unified analytics.",
        f5Detail: "Enterprise-grade protection powered by biometric authentication and military-standard SQLCipher AES-256 encryption. Your sensitive data remains completely secure and accessible only by you.",
        f6Detail: "Effortless cloud synchronization via Google Drive ensures your data travels with you. Automatic encrypted backups protect against data loss across all your platforms."
    },
    'de': {
        f1Detail: "Umfassende Kraftstoffprotokollierung mit Echtzeit-Kostenanalysen und Verbrauchsmustern. Verfolgen Sie jede Tankfüllung präzise und erhalten Sie umsetzbare Erkenntnisse, um Ihr Kraftstoffbudget zu optimieren.",
        f2Detail: "Ein intelligenter Wartungs-Hub, der Ihr Fahrzeug in Top-Zustand hält. Planen Sie Ölwechsel, Reifenwechsel und mehr mit intelligenten Erinnerungen. Die vollständige Servicehistorie ist immer griffbereit.",
        f3Detail: "Verwandeln Sie Rohdaten in visuelle Intelligenz. Interaktive Diagramme zeigen Verbrauchstrends, Kostenvergleiche und Effizienzkennzahlen über bestimmte Zeiträume hinweg.",
        f4Detail: "Verwalten Sie Ihre gesamte Flotte nahtlos über ein einziges Dashboard. Wechseln Sie sofort zwischen Fahrzeugen mit einheitlichen Analysen.",
        f5Detail: "Schutz auf Unternehmensniveau durch biometrische Authentifizierung und SQLCipher AES-256-Verschlüsselung. Ihre Daten bleiben absolut sicher.",
        f6Detail: "Mühelose Cloud-Synchronisierung über Google Drive. Automatische verschlüsselte Backups schützen geräteübergreifend vor Datenverlust."
    },
    'fr': {
        f1Detail: "Suivi complet du carburant avec des analyses de coûts en temps réel et des modèles de consommation. Suivez chaque plein avec précision et obtenez des informations pour optimiser votre budget.",
        f2Detail: "Un centre de maintenance intelligent qui garde votre véhicule en parfait état. Planifiez les vidanges d'huile, les permutations de pneus et bien plus encore grâce à des rappels.",
        f3Detail: "Transformez les données brutes en intelligence visuelle spectaculaire. Des graphiques interactifs révèlent les tendances de consommation et les comparaisons de coûts.",
        f4Detail: "Gérez l'ensemble de votre flotte à partir d'un tableau de bord unique. Passez instantanément d'un véhicule à l'autre avec des analyses unifiées.",
        f5Detail: "Protection de niveau entreprise grâce à l'authentification biométrique et au cryptage SQLCipher AES-256. Vos données sensibles restent totalement sécurisées.",
        f6Detail: "La synchronisation cloud via Google Drive garantit que vos données voyagent avec vous. Des sauvegardes cryptées automatiques protègent contre la perte de données."
    },
    'es': {
        f1Detail: "Registro de combustible completo con análisis de costos en tiempo real y patrones de consumo. Realice un seguimiento de cada recarga con precisión y obtenga información útil.",
        f2Detail: "Un centro de mantenimiento inteligente que mantiene su vehículo en óptimas condiciones. Programe cambios de aceite y rotaciones de neumáticos con recordatorios inteligentes.",
        f3Detail: "Transforme datos en potente visualización. Gráficos interactivos revelan tendencias de consumo, comparaciones de costos y métricas de eficiencia.",
        f4Detail: "Administre toda su flota de manera perfecta desde un panel central. Cambie entre vehículos al instante con análisis unificados.",
        f5Detail: "Protección de nivel empresarial impulsada por autenticación biométrica y cifrado SQLCipher AES-256. Sus datos siguen siendo completamente seguros.",
        f6Detail: "Sincronización en la nube mediante Google Drive. Las copias de seguridad automáticas y cifradas protegen contra la pérdida de datos en todas las plataformas."
    },
    'it': {
        f1Detail: "Registrazione completa del carburante con analisi dei costi in tempo reale. Monitora ogni rifornimento con precisione e ottieni informazioni per ottimizzare il budget.",
        f2Detail: "Un hub intelligente che mantiene il tuo veicolo in perfette condizioni. Pianifica cambi d'olio e inversioni pneumatici con promemoria intelligenti.",
        f3Detail: "Trasforma i dati grezzi in intelligence visiva. Grafici interattivi rivelano tendenze di consumo e confronti di costi.",
        f4Detail: "Gestisci l'intera flotta senza problemi da un singolo pannello. Passa da un veicolo all'altro istantaneamente con analisi unificate.",
        f5Detail: "Protezione di livello aziendale basata su autenticazione biometrica e crittografia SQLCipher AES-256. Dati sicuri e accessibili solo da te.",
        f6Detail: "La sincronizzazione cloud tramite Google Drive assicura che i dati viaggino con te. I backup crittografati automatici proteggono dalla perdita di dati."
    },
    'ru': {
        f1Detail: "Комплексный учет топлива с аналитикой затрат в реальном времени. Точно отслеживайте каждую заправку и получайте данные для оптимизации бюджета.",
        f2Detail: "Умный центр обслуживания, который поддерживает ваш автомобиль в идеальном состоянии. Планируйте замену масла и шин с умными напоминаниями.",
        f3Detail: "Интерактивные графики показывают тенденции потребления, сравнения затрат и показатели эффективности за любые периоды времени.",
        f4Detail: "Легко управляйте всем своим автопарком с единой панели инструментов. Мгновенно переключайтесь между транспортными средствами с единой аналитикой.",
        f5Detail: "Защита корпоративного уровня с биометрической аутентификацией и шифрованием SQLCipher AES-256. Ваши данные в полной безопасности.",
        f6Detail: "Синхронизация через Google Drive гарантирует сохранность данных. Автоматические зашифрованные резервные копии защищают от потери данных на всех платформах."
    },
    'zh': {
        f1Detail: "通过实时成本分析全面记录燃料。精确跟踪每次加油，并获得优化燃料预算的见解。",
        f2Detail: "智能维护中心让您的车辆保持最佳状态。通过智能提醒安排更换机油、轮胎等。",
        f3Detail: "将原始数据转化为强大的视觉智能。交互式图表揭示了消费趋势、成本比较和效率指标。",
        f4Detail: "通过单一仪表板无缝管理整个车队。在具有统一分析的车辆之间即时切换。",
        f5Detail: "由生物识别验证和军事标准 SQLCipher AES-256 加密提供保护。数据敏感且完全安全。",
        f6Detail: "通过 Google Drive 进行云同步。自动加密备份可防止所有平台上的数据丢失。"
    },
    'hi': {
        f1Detail: "रीयल-टाइम लागत विश्लेषण के साथ व्यापक ईंधन लॉगिंग। अपने बजट को अनुकूलित करने के लिए सटीक रूप से हर रिफिल को ट्रैक करें।",
        f2Detail: "एक स्मार्ट रखरखाव केंद्र जो आपके वाहन को सर्वोच्च स्थिति में रखता है। स्मार्ट रिमाइंडर के साथ तेल और टायर बदलने का समय निर्धारित करें।",
        f3Detail: "कच्चे डेटा को शक्तिशाली विज़ुअल इंटेलिजेंस में बदलें। इंटरएक्टिव चार्ट खपत के रुझान और दक्षता मेट्रिक्स प्रकट करते हैं।",
        f4Detail: "अपने पूरे बेड़े को एक ही स्थान से आसानी से प्रबंधित करें। एकीकृत विश्लेषण के साथ वाहनों के बीच तुरंत स्विच करें।",
        f5Detail: "बायोमेट्रिक प्रमाणीकरण और SQLCipher एन्क्रिप्शन द्वारा संचालित एंटरप्राइज़-ग्रेड सुरक्षा। आपका डेटा पूरी तरह सुरक्षित है।",
        f6Detail: "Google ड्राइव के माध्यम से आसान क्लाउड सिंक। स्वचालित एन्क्रिप्टेड बैकअप सभी प्लेटफार्मों पर डेटा हानि से रक्षा करते हैं।"
    }
};

let content = fs.readFileSync('script.js', 'utf8');

// Insert the translation keys inside each language object
Object.keys(details).forEach(lang => {
    const langObj = details[lang];
    const marker = `f6Desc: `;
    const regex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?f6Desc:\\s*["'].*?["'])`, 'g');
    
    let replacement = '';
    for (const key in langObj) {
        replacement += `,\\n        ${key}: "${langObj[key]}"`;
    }
    
    content = content.replace(regex, `$1${replacement}`);
});

// Update the elementsToTranslate array to include our new IDs
const oldArrayStr = "['f6-title', t.f6Title], ['f6-desc', t.f6Desc]";
const newArrayStr = "['f6-title', t.f6Title], ['f6-desc', t.f6Desc]," +
    "\\n        ['f1-detail', t.f1Detail], ['f2-detail', t.f2Detail]," +
    "\\n        ['f3-detail', t.f3Detail], ['f4-detail', t.f4Detail]," +
    "\\n        ['f5-detail', t.f5Detail], ['f6-detail', t.f6Detail]";

content = content.replace(oldArrayStr, newArrayStr);

fs.writeFileSync('script.js', content, 'utf8');
console.log('script.js successfully updated.');
