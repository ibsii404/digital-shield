import React, { useMemo, useState } from 'react';
import { siteContent } from './content';
import heroImg from './assets/hero-arch.jpeg';
import tool1 from './assets/tool-privacy.jpeg';
import tool2 from './assets/tool-block.jpeg';
import tool3 from './assets/tool-legal.jpeg';
import tool4 from './assets/tool-support.jpeg';
import spotlightImg from './assets/spotlight-person.jpeg';

function App() {
  const [page, setPage] = useState('hero');
  const [selectedToolId, setSelectedToolId] = useState(null);
  const [isUrdu, setIsUrdu] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [textScale, setTextScale] = useState('base');
  const [checklistState, setChecklistState] = useState(() => ({}));
  const [reportForm, setReportForm] = useState({
    username: '',
    platform: '',
    issue: '',
  });

  const tools = useMemo(
    () => [
      {
        ...siteContent.safetyToolkit[0],
        image: tool1,
        mobileTitle: 'Privacy',
        detailTitle: 'Privacy Check',
        textClass: 'text-forme-brown',
        detailText:
          'Review profile visibility, remove sensitive public info, and enable two-factor authentication across your accounts.',
      },
      {
        ...siteContent.safetyToolkit[1],
        image: tool2,
        mobileTitle: 'Block & Report',
        detailTitle: 'Block & Report',
        textClass: 'text-forme-brown',
        detailText:
          'Use platform safety tools immediately. On Instagram: Settings → Privacy → Restricted Accounts. On Facebook: Privacy Checkup → Limit Past Posts. On WhatsApp: Settings → Privacy → Profile Photo → My Contacts. Document harmful activity and report repeat behavior with screenshots and timestamps.',
      },
      {
        ...siteContent.safetyToolkit[2],
        image: tool3,
        mobileTitle: 'Legal Rights',
        detailTitle: 'Legal Rights',
        textClass: 'text-forme-brown',
        detailText:
          'If someone shares private content without consent, blackmails you, or stalks you online, you can file a complaint with FIA Cyber Crime Wing and local police. Save screenshots, URLs, usernames, and timestamps as evidence before reporting. You can also seek legal aid and request platform takedown of harmful content.',
      },
      {
        ...siteContent.safetyToolkit[3],
        image: tool4,
        mobileTitle: 'Support',
        detailTitle: 'Get Support',
        textClass: 'text-forme-brown',
        detailText:
          'Talk to trusted people, reach support networks, and use helplines. Safety improves when you do not handle abuse alone. If you are in immediate danger, contact emergency services first.',
      },
    ],
    []
  );

  const selectedTool = tools.find((tool) => tool.id === selectedToolId);
  const checklistItems = useMemo(
    () => [
      { id: 'ig-private', en: 'Is your Instagram private?', ur: 'کیا آپ کا انسٹاگرام پرائیویٹ ہے؟' },
      { id: 'two-fa', en: 'Two-factor authentication enabled?', ur: 'کیا دو مرحلہ تصدیق فعال ہے؟' },
      { id: 'phone-hidden', en: 'Removed phone number from public view?', ur: 'کیا فون نمبر پبلک سے ہٹا دیا ہے؟' },
      { id: 'google-security', en: 'Checked Google account security?', ur: 'کیا گوگل اکاؤنٹ سیکیورٹی چیک کی؟' },
      { id: 'strong-passwords', en: 'Using unique, strong passwords?', ur: 'کیا منفرد اور مضبوط پاس ورڈ استعمال کر رہے ہیں؟' },
      { id: 'login-alerts', en: 'Login alerts turned on?', ur: 'کیا لاگ اِن الرٹس آن ہیں؟' },
      { id: 'location-off', en: 'Location sharing turned off?', ur: 'کیا لوکیشن شیئرنگ بند ہے؟' },
      { id: 'old-posts', en: 'Reviewed old posts for sensitive info?', ur: 'کیا پرانے پوسٹس میں حساس معلومات چیک کیں؟' },
      { id: 'trusted-contacts', en: 'Set trusted contacts / recovery email?', ur: 'کیا ٹرسٹڈ کانٹیکٹس یا ریکوری ای میل سیٹ ہے؟' },
      { id: 'evidence-folder', en: 'Created an evidence folder?', ur: 'کیا ثبوت محفوظ کرنے کے لیے فولڈر بنایا ہے؟' },
    ],
    []
  );
  const totalChecklist = checklistItems.length;
  const checkedCount = checklistItems.filter((item) => checklistState[item.id]).length;
  const remainingCount = totalChecklist - checkedCount;

  const reportTemplate = useMemo(() => {
    const today = new Date().toLocaleDateString('en-PK');
    const username = reportForm.username || '[Username / Profile link]';
    const platform = reportForm.platform || '[Platform]';
    const issue = reportForm.issue || '[Describe what happened]';

    return `To,\nFIA Cyber Crime Wing,\n\nSubject: Complaint regarding online harassment and abuse\n\nDate: ${today}\nPlatform: ${platform}\nReported Account/Username: ${username}\n\nDescription of Incident:\n${issue}\n\nEvidence Attached:\n- Screenshots\n- URLs\n- Timestamps\n\nRequested Action:\nI request investigation and appropriate action under applicable cyber crime laws. I am available to provide further information as needed.\n\nSincerely,\n[Your Name]\n[Contact Number]\n[City]`;
  }, [reportForm]);

  const copy = {
    quickExit: isUrdu ? 'فوری ایگزٹ' : 'Quick Exit',
    quickExitHint: isUrdu ? 'فوری طور پر گوگل پر چلے جائیں' : 'Exit instantly to Google',
    safetyHub: isUrdu ? 'سیفٹی ہب' : 'Safety Hub',
    back: isUrdu ? 'واپس' : 'Back',
    accessibility: isUrdu ? 'رسائی کے اختیارات' : 'Accessibility Controls',
    urdu: isUrdu ? 'English' : 'اردو',
    highContrast: isUrdu ? 'High Contrast' : 'High Contrast',
    textSize: isUrdu ? 'ٹیکسٹ سائز' : 'Text Size',
    checklistTitle: isUrdu ? 'فوری سیفٹی چیک لسٹ' : 'Quick Safety Checklist',
    checklistHint: isUrdu
      ? 'جو چیزیں مکمل ہو چکی ہیں انہیں ٹِک کریں۔'
      : 'Tick what you have already completed.',
    safetyScore: isUrdu ? 'آپ کا سیفٹی اسکور' : 'Your Safety Score',
    improveMore: isUrdu ? 'مزید بہتر کریں' : 'Improve',
    reportTitle: isUrdu ? 'شکایت ٹیمپلیٹ جنریٹر' : 'Report Template Generator',
    reportHint: isUrdu ? 'تفصیل درج کریں اور ٹیمپلیٹ تیار کریں۔' : 'Enter details and generate a ready-to-copy report.',
    reportUsername: isUrdu ? 'یوزرنیم / پروفائل لنک' : 'Username / Profile link',
    reportPlatform: isUrdu ? 'پلیٹ فارم' : 'Platform',
    reportIssue: isUrdu ? 'واقعہ کی تفصیل' : 'Describe the issue',
    statsTitle: isUrdu ? 'پاکستان میں حقیقت' : 'The Reality in Pakistan',
    statsNote: isUrdu
      ? 'اعداد و شمار مستند ذرائع سے اپ ڈیٹ کریں۔'
      : 'Update the figures with verified sources.',
    typesTitle: isUrdu ? 'ٹیکنالوجی سے جڑی تشدد کی اقسام' : 'Technology-Facilitated GBV Types',
    impactTitle: isUrdu ? 'یہ کیوں اہم ہے' : 'Why This Matters',
    resourcesTitle: isUrdu ? 'مددگار وسائل' : 'Resources',
    aboutTitle: isUrdu ? 'تعارف' : 'About the Creator',
    footerAbout: isUrdu ? 'ہمارے بارے میں' : 'About',
    footerContact: isUrdu ? 'رابطہ' : 'Contact',
    footerSources: isUrdu ? 'ذرائع' : 'Sources',
    footerDisclaimer: isUrdu ? 'ڈسکلیمر' : 'Disclaimer',
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden font-body text-forme-brown ${
        isHighContrast ? 'contrast-high' : ''
      } ${isUrdu ? 'urdu-mode' : ''}`}
      style={{
        fontSize: textScale === 'xl' ? '20px' : textScale === 'lg' ? '18px' : '16px',
      }}
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-forme-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[28rem] h-72 w-72 rounded-full bg-forme-brown/10 blur-3xl" />

      <button
        type="button"
        aria-label={copy.quickExitHint}
        onClick={() => {
          window.location.replace('https://www.google.com');
        }}
        className="fixed right-4 top-4 z-50 rounded-[28px] bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-red-700"
      >
        🔴 {copy.quickExit}
      </button>

      <main className="relative z-10 w-full">
        {page === 'hero' && (
          <section className="page-fade flex flex-col gap-5 px-4 pb-8 pt-10 md:px-8 md:pb-10 md:pt-12">
            <div className="soft-ring relative overflow-hidden rounded-forme-arch h-[48vh] min-h-[300px] md:h-[56vh] md:min-h-[560px]">
              <img
                src={heroImg}
                alt="Secure digital life"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
            <div className="rounded-forme-card border border-forme-brown/10 bg-forme-beige/70 p-5 text-center text-lg italic tracking-wide text-forme-brown/95 shadow-sm">
              "{siteContent.hero.tagline}"
            </div>
            <button
              type="button"
              onClick={() => setPage('hub')}
              className="soft-ring rounded-forme-pill bg-forme-brown p-6 text-center text-4xl font-display uppercase tracking-[0.18em] text-forme-beige transition hover:-translate-y-0.5 hover:bg-[#2f211c]"
            >
              {siteContent.hero.title}
            </button>
          </section>
        )}

        {page === 'hub' && (
          <section className="page-fade flex flex-col gap-6 px-4 pb-8 pt-6 md:px-8 md:pb-12">
            <div className="flex items-center justify-between">
              <h2 className="text-6xl font-display leading-none whitespace-nowrap md:text-7xl">{copy.safetyHub}</h2>
              <button
                type="button"
                onClick={() => setPage('hero')}
                className="rounded-full border border-forme-brown/20 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition hover:bg-white"
              >
                {copy.back}
              </button>
            </div>

            <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-[#f2e8e2] p-8 md:p-10">
              <p className="max-w-2xl text-xl leading-relaxed text-forme-brown/75">{siteContent.hero.description}</p>
            </div>

            <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-white/80 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.12em]">{copy.accessibility}</h3>
                  <p className="mt-2 text-sm text-forme-brown/70">
                    {isUrdu
                      ? 'زبان، کنٹراسٹ اور سائز اپنی ضرورت کے مطابق تبدیل کریں۔'
                      : 'Switch language, contrast, and size to fit your needs.'}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setIsUrdu((prev) => !prev)}
                    className="rounded-full border border-forme-brown/20 bg-forme-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    {copy.urdu}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsHighContrast((prev) => !prev)}
                    className="rounded-full border border-forme-brown/20 bg-forme-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    {copy.highContrast}
                  </button>
                  {/* <div className="flex overflow-hidden rounded-full border border-forme-brown/20">
                    <button
                      type="button"
                      onClick={() => setTextScale('base')}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                        textScale === 'base' ? 'bg-forme-brown text-forme-beige' : 'bg-white'
                      }`}
                    >
                      A
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextScale('lg')}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                        textScale === 'lg' ? 'bg-forme-brown text-forme-beige' : 'bg-white'
                      }`}
                    >
                      A+
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextScale('xl')}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                        textScale === 'xl' ? 'bg-forme-brown text-forme-beige' : 'bg-white'
                      }`}
                    >
                      A++
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => {
                    setSelectedToolId(tool.id);
                    setPage('detail');
                  }}
                  className={`${tool.color} ${tool.textClass} soft-ring flex flex-col gap-4 rounded-[40px] p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-[24px]">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="h-full w-full object-cover grayscale-[0.15] transition duration-500 hover:scale-105 hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 truncate whitespace-nowrap text-sm font-extrabold uppercase tracking-tight md:text-base">
                      <span className="md:hidden">{tool.mobileTitle}</span>
                      <span className="hidden md:inline">{tool.title}</span>
                    </h3>
                    <p className="text-sm font-medium leading-relaxed opacity-70 break-words">{tool.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-white/90 p-7 md:p-10">
                <h3 className="text-2xl font-display">{copy.checklistTitle}</h3>
                <p className="mt-2 text-sm text-forme-brown/70">{copy.checklistHint}</p>
                <div className="mt-5 grid gap-3">
                  {checklistItems.map((item) => (
                    <label
                      key={item.id}
                      htmlFor={`check-${item.id}`}
                      className={`flex items-center gap-3 rounded-2xl border border-forme-brown/10 bg-forme-beige/60 px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-forme-beige ${
                        checklistState[item.id] ? 'checked-tint' : ''
                      }`}
                    >
                      <input
                        id={`check-${item.id}`}
                        type="checkbox"
                        checked={Boolean(checklistState[item.id])}
                        onChange={(event) =>
                          setChecklistState((prev) => ({
                            ...prev,
                            [item.id]: event.target.checked,
                          }))
                        }
                        className="h-4 w-4 accent-forme-brown"
                        aria-label={isUrdu ? item.ur : item.en}
                      />
                      <span>{isUrdu ? item.ur : item.en}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="soft-ring flex flex-col justify-between rounded-forme-card border border-forme-brown/10 bg-forme-brown p-7 text-forme-beige md:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">{copy.safetyScore}</p>
                  <h4 className="mt-3 text-5xl font-display">
                    {checkedCount}/{totalChecklist}
                  </h4>
                  <p className="mt-3 text-base opacity-90" aria-live="polite">
                    {copy.safetyScore}: {checkedCount}/{totalChecklist} — {copy.improveMore} {remainingCount}{' '}
                    {isUrdu ? 'مزید چیزیں' : 'more areas'}
                  </p>
                </div>
                <div className="mt-8 rounded-3xl border border-forme-beige/25 bg-forme-beige/10 p-4 text-sm opacity-85">
                  {isUrdu
                    ? 'ہر چھوٹا قدم آپ کی حفاظت بڑھاتا ہے۔'
                    : 'Every small step raises your protection.'}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-white/90 p-7 md:p-10">
                <h3 className="text-2xl font-display">{copy.reportTitle}</h3>
                <p className="mt-2 text-sm text-forme-brown/70">{copy.reportHint}</p>
                <div className="mt-5 grid gap-4">
                  <div>
                    <label htmlFor="report-username" className="text-xs font-semibold uppercase tracking-[0.12em]">
                      {copy.reportUsername}
                    </label>
                    <input
                      id="report-username"
                      type="text"
                      value={reportForm.username}
                      onChange={(event) => setReportForm((prev) => ({ ...prev, username: event.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-[#d3c6be] bg-forme-beige/40 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-forme-brown/30"
                      placeholder={isUrdu ? 'مثال: username123' : 'e.g., username123'}
                    />
                  </div>
                  <div>
                    <label htmlFor="report-platform" className="text-xs font-semibold uppercase tracking-[0.12em]">
                      {copy.reportPlatform}
                    </label>
                    <input
                      id="report-platform"
                      type="text"
                      value={reportForm.platform}
                      onChange={(event) => setReportForm((prev) => ({ ...prev, platform: event.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-[#d3c6be] bg-forme-beige/40 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-forme-brown/30"
                      placeholder={isUrdu ? 'مثال: Instagram' : 'e.g., Instagram'}
                    />
                  </div>
                  <div>
                    <label htmlFor="report-issue" className="text-xs font-semibold uppercase tracking-[0.12em]">
                      {copy.reportIssue}
                    </label>
                    <textarea
                      id="report-issue"
                      rows="4"
                      value={reportForm.issue}
                      onChange={(event) => setReportForm((prev) => ({ ...prev, issue: event.target.value }))}
                      className="mt-2 w-full rounded-2xl border border-[#d3c6be] bg-forme-beige/40 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-forme-brown/30"
                      placeholder={
                        isUrdu
                          ? 'مثال: میرے اکاؤنٹ کی جعلی پروفائل بنائی گئی۔'
                          : 'e.g., A fake profile was created using my photos.'
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-forme-beige/80 p-7 md:p-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold uppercase tracking-[0.12em]">
                    {isUrdu ? 'تیار ٹیمپلیٹ' : 'Generated Template'}
                  </h4>
                  <span className="rounded-full border border-forme-brown/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                    FIA
                  </span>
                </div>
                <textarea
                  readOnly
                  value={reportTemplate}
                  rows="14"
                  className="mt-4 w-full rounded-3xl border border-forme-brown/15 bg-white/90 px-4 py-3 text-xs leading-relaxed focus:outline-none"
                  aria-label={isUrdu ? 'تیار شکایت' : 'Generated complaint'}
                  data-rtl="false"
                />
              </div>
            </div>

            <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-white/90 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-display">{copy.statsTitle}</h3>
                  <p className="mt-2 text-sm text-forme-brown/70">{copy.statsNote}</p>
                </div>
                <span className="rounded-full border border-forme-brown/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  FIA · DRF · UN Women
                </span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-forme-brown/70">
                    {isUrdu ? 'آن لائن ہراسانی' : 'Online Harassment'}
                  </p>
                  <p className="mt-3 text-3xl font-display">[XX%]</p>
                  <p className="mt-2 text-sm text-forme-brown/70">
                    {isUrdu ? 'متاثرہ خواتین کی شرح' : 'Share of women affected'}
                  </p>
                </div>
                <div className="rounded-3xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-forme-brown/70">
                    {isUrdu ? 'عام پلیٹ فارمز' : 'Common Platforms'}
                  </p>
                  <p className="mt-3 text-3xl font-display">[Top 3]</p>
                  <p className="mt-2 text-sm text-forme-brown/70">
                    {isUrdu ? 'سب سے زیادہ رپورٹ ہونے والے' : 'Most reported channels'}
                  </p>
                </div>
                <div className="rounded-3xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-forme-brown/70">
                    {isUrdu ? 'کم رپورٹنگ' : 'Underreported Cases'}
                  </p>
                  <p className="mt-3 text-3xl font-display">[XX%]</p>
                  <p className="mt-2 text-sm text-forme-brown/70">
                    {isUrdu ? 'رپورٹ نہ ہونے والے کیسز' : 'Estimated unreported'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-white/90 p-7 md:p-10">
                <h3 className="text-2xl font-display">{copy.typesTitle}</h3>
                <div className="mt-5 grid gap-3 text-sm text-forme-brown/75">
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">Doxxing:</strong> {isUrdu ? 'ذاتی معلومات کی عوامی شیئرنگ۔' : 'Public sharing of private information.'}
                  </div>
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">Revenge Porn:</strong> {isUrdu ? 'رضامندی کے بغیر نجی تصاویر شیئر کرنا۔' : 'Sharing intimate images without consent.'}
                  </div>
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">Deepfake Abuse:</strong> {isUrdu ? 'جعلی ویڈیوز کے ذریعے بدنام کرنا۔' : 'Manipulated media used to shame or blackmail.'}
                  </div>
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">Cyberstalking:</strong> {isUrdu ? 'آن لائن مسلسل نگرانی اور دھمکیاں۔' : 'Persistent online monitoring and threats.'}
                  </div>
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">Impersonation:</strong> {isUrdu ? 'جعلی شناخت سے نقصان پہنچانا۔' : 'Fake profiles used to harm reputation.'}
                  </div>
                </div>
              </div>
              <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-forme-brown p-7 text-forme-beige md:p-10">
                <h3 className="text-2xl font-display">{copy.impactTitle}</h3>
                <ul className="mt-5 grid gap-3 text-sm opacity-90">
                  <li className="rounded-2xl border border-forme-beige/15 bg-forme-beige/10 p-4">
                    {isUrdu
                      ? 'ذہنی دباؤ، خوف اور بے خوابی جیسی علامات بڑھ جاتی ہیں۔'
                      : 'Mental health strain, anxiety, and sleep disruption increase.'}
                  </li>
                  <li className="rounded-2xl border border-forme-beige/15 bg-forme-beige/10 p-4">
                    {isUrdu
                      ? 'تعلیمی اور کیریئر کے مواقع متاثر ہوتے ہیں۔'
                      : 'Education and career opportunities can be delayed or lost.'}
                  </li>
                  <li className="rounded-2xl border border-forme-beige/15 bg-forme-beige/10 p-4">
                    {isUrdu ? 'سماجی بدنامی اور تنہائی بڑھتی ہے۔' : 'Social stigma and isolation intensify.'}
                  </li>
                  <li className="rounded-2xl border border-forme-beige/15 bg-forme-beige/10 p-4">
                    {isUrdu
                      ? 'خاموشی کی ثقافت متاثرین کو مدد سے دور رکھتی ہے۔'
                      : 'A culture of silence keeps survivors from seeking help.'}
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-white/90 p-7 md:p-10">
                <h3 className="text-2xl font-display">{copy.resourcesTitle}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-forme-brown/75">
                  <li className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4" data-rtl="false">
                    FIA Cyber Crime Wing: https://www.fia.gov.pk
                  </li>
                  <li className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4" data-rtl="false">
                    Digital Rights Foundation Helpline: https://digitalrightsfoundation.pk
                  </li>
                  <li className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4" data-rtl="false">
                    UN Women Pakistan: https://pakistan.unwomen.org
                  </li>
                  <li className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4" data-rtl="false">
                    Legal Aid Society: https://legalaid.org.pk
                  </li>
                </ul>
              </div>
              <div className="soft-ring rounded-forme-card border border-forme-brown/10 bg-white/90 p-7 md:p-10">
                <h3 className="text-2xl font-display">{copy.aboutTitle}</h3>
                <div className="mt-5 grid gap-3 text-sm text-forme-brown/75">
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">
                      {isUrdu ? 'نام' : 'Name'}:
                    </strong>{' '}
                    Ibtesam Ul Hassan
                  </div>
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">
                      {isUrdu ? 'مشن' : 'Mission'}:
                    </strong>{' '}
                    {isUrdu
                      ? 'پاکستان میں ڈیجیٹل تحفظ اور باخبر فیصلوں کو فروغ دینا۔'
                      : 'Build safer digital spaces and informed choices for people in Pakistan.'}
                  </div>
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">
                      {isUrdu ? 'کیوں' : 'Why this'}
                    </strong>
                    :{' '}
                    {isUrdu
                      ? 'حقیقی مسائل دیکھ کر یہ پلیٹ فارم بنایا۔'
                      : 'Built this after seeing real harm from online abuse.'}
                  </div>
                  <div className="rounded-2xl border border-forme-brown/10 bg-forme-beige/60 p-4">
                    <strong className="text-forme-brown">
                      {isUrdu ? 'تعلیم' : 'Education'}:
                    </strong>{' '}
                    {isUrdu ? 'بی ایس سی ایس، MNSUAM (جاری)' : 'BSCS student at MNSUAM (in progress)'}
                  </div>
                </div>
              </div>
            </div>

            <footer className="rounded-forme-card border border-forme-brown/10 bg-forme-beige/80 p-6 text-sm text-forme-brown/70">
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">{copy.footerAbout}</h4>
                  <p className="mt-2 max-w-xs">
                    {isUrdu
                      ? 'ڈیجیٹل شیلڈ پاکستانی خواتین اور کمزور طبقوں کے لیے حفاظت فراہم کرتی ہے۔'
                      : 'Digital Shield supports safer online experiences for women and vulnerable communities.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">{copy.footerContact}</h4>
                  <p className="mt-2" data-rtl="false">contact@digitalshield.pk</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">{copy.footerSources}</h4>
                  <p className="mt-2">
                    {isUrdu ? 'FIA، DRF، UN Women' : 'FIA, DRF, UN Women'}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">{copy.footerDisclaimer}</h4>
                  <p className="mt-2">
                    {isUrdu
                      ? 'یہ معلومات قانونی مشورہ نہیں۔'
                      : 'This information is not legal advice.'}
                  </p>
                </div>
              </div>
            </footer>
          </section>
        )}

        {page === 'detail' && selectedTool && (
          <section className="page-fade min-h-screen">
            <div className="h-[58vh] min-h-[420px] overflow-hidden">
              <img
                src={selectedTool.id === 4 ? spotlightImg : selectedTool.image}
                alt={selectedTool.detailTitle}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative -mt-14 rounded-t-[46px] bg-forme-brown px-6 pb-12 pt-10 text-forme-beige md:px-10 md:pt-12">
              <h3 className="mb-4 text-5xl font-display leading-[0.95]">{selectedTool.detailTitle}</h3>
              <p className="max-w-3xl text-xl leading-relaxed opacity-90">{selectedTool.detailText}</p>

              {selectedTool.id === 4 && (
                <div className="mt-6 rounded-3xl border border-forme-beige/20 bg-forme-beige/10 p-5">
                  <h4 className="text-lg font-bold uppercase tracking-[0.08em]">Pakistan Helplines</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed opacity-95 md:text-base">
                    <li>Police Emergency: 15</li>
                    <li>Rescue Service: 1122</li>
                    <li>FIA Cyber Crime Helpline: 1991 / 9911</li>
                    <li>DRF Cyber Harassment Helpline: 0800-39393</li>
                    <li>Madadgaar Helpline: 1098</li>
                  </ul>
                  <p className="mt-3 text-xs opacity-80">Numbers can vary by region, so verify if a line is unavailable.</p>
                </div>
              )}

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPage('hub')}
                  className="rounded-full bg-forme-beige px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-forme-brown transition hover:bg-white"
                >
                  Back To Hub
                </button>
                <button
                  type="button"
                  onClick={() => setPage('hero')}
                  className="rounded-full border border-forme-beige/40 px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition hover:bg-forme-beige/10"
                >
                  Home
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  );
}

export default App;
