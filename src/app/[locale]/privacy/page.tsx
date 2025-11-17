import React from "react";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export async function generateMetadata() {
  const locale = await getLocale();
  const isZh = locale.startsWith("zh");

  return {
    title: isZh
      ? "隐私政策 – Shift at Midnight"
      : "Privacy Policy – Shift at Midnight",
    description: isZh
      ? "本页面说明 shiftatmidnight.com 如何收集、使用和保护您的个人信息。"
      : "This page explains how shiftatmidnight.com collects, uses and protects your personal information.",
  };
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  const isZh = locale.startsWith("zh");

  return (
    <div className="container mx-auto py-12 space-y-12 min-h-screen">
      {/* 头部：面包屑 + 标题 */}
      <section className="text-center space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {isZh ? "首页" : "Home"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{isZh ? "隐私政策" : "Privacy Policy"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight pt-10">
          {isZh ? "隐私政策" : "Privacy Policy"}
        </h1>
        <h2 className="mx-auto max-w-[700px] opacity-60 md:text-xl">
          {isZh
            ? "本页面说明我们在 shiftatmidnight.com 上如何收集、使用和保护您的信息。"
            : "This page explains how we collect, use and protect your information when you use shiftatmidnight.com."}
        </h2>
      </section>

      {/* 正文 */}
      <section className="max-w-3xl mx-auto space-y-8 text-sm leading-relaxed text-left">
        {isZh ? <ZhPrivacyContent /> : <EnPrivacyContent />}
        <p className="text-xs opacity-70 pt-4">
          {isZh
            ? "本隐私政策模板仅供一般参考，并不构成法律意见。根据您所在国家或地区的法律，您可能需要进一步修改本页面内容。"
            : "This privacy policy template is provided for general information only and does not constitute legal advice. You may need to adapt it to comply with the laws of your country or region."}
        </p>
      </section>
    </div>
  );
}

/** 英文版隐私政策内容 */
function EnPrivacyContent() {
  return (
    <>
      <p>
        This Privacy Policy describes how we handle information when you visit
        and use{" "}
        <span className="font-semibold">shiftatmidnight.com</span> (the
        &quot;Website&quot;, &quot;we&quot;, &quot;our&quot; or
        &quot;us&quot;). The Website is an independent fan-made site that
        provides information and resources related to the game &quot;Shift at
        Midnight&quot;. It is not officially affiliated with the game&apos;s
        developer or publisher.
      </p>

      <section>
        <h3 className="text-base font-semibold mb-2">1. Information We Collect</h3>
        <p className="mb-2">
          We aim to collect as little personal information as reasonably
          necessary to operate and improve the Website. Depending on how you use
          the Website, we may collect the following types of information:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">Information you provide directly.</span>{" "}
            If you contact us by email or through a contact form (if available),
            we may receive your email address, name or any other information you
            choose to include in your message.
          </li>
          <li>
            <span className="font-medium">Log and usage data.</span> Like most
            websites, our servers may automatically record technical information
            when you visit the Website, such as your IP address, browser type,
            approximate location, pages visited and the time and date of your
            request.
          </li>
          <li>
            <span className="font-medium">Cookies and similar technologies.</span>{" "}
            We may use cookies or similar technologies to remember your
            preferences, such as language selection, and to understand how
            visitors use the Website. Third-party analytics tools (if enabled)
            may also set their own cookies.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          2. How We Use Your Information
        </h3>
        <p className="mb-2">We may use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Operate, maintain and improve the Website and its content.</li>
          <li>
            Respond to your questions, requests or feedback when you contact us.
          </li>
          <li>
            Monitor Website performance, detect technical issues and protect
            against abuse or malicious activity.
          </li>
          <li>
            Analyze aggregated, non-identifying usage patterns to understand
            which pages and content are most useful to visitors.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          3. Cookies and Analytics
        </h3>
        <p className="mb-2">
          Cookies are small text files stored on your device. They help the
          Website remember your settings and preferences.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">Essential cookies.</span> These are
            used to provide core functionality, such as remembering your
            language preference or basic security settings.
          </li>
          <li>
            <span className="font-medium">Analytics cookies (if used).</span> We
            may use privacy-friendly analytics tools to understand overall
            traffic patterns. These tools are generally configured to avoid
            collecting personally identifying information whenever possible.
          </li>
        </ul>
        <p className="mt-2">
          You can usually disable cookies through your browser settings, but
          some features of the Website may not work correctly without them.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          4. Third-Party Links and Content
        </h3>
        <p>
          The Website contains links to third-party sites and services, such as
          Itch.io, Steam, GitHub and other external resources related to
          &quot;Shift at Midnight&quot;. We are not responsible for the privacy
          practices or content of those third-party sites. When you leave our
          Website, we encourage you to review the privacy policies of any site
          you visit.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">5. Data Retention</h3>
        <p>
          We keep log and analytics data only for as long as reasonably necessary
          to operate, secure and improve the Website. Information you send us by
          email may be kept for as long as needed to respond to your message and
          maintain reasonable records, unless you ask us to delete it and we are
          able to do so.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">6. Data Security</h3>
        <p>
          We use reasonable technical and organizational measures to help
          protect the information we hold from loss, misuse or unauthorized
          access. However, no method of transmission over the Internet or method
          of electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          7. Your Rights and Choices
        </h3>
        <p className="mb-2">
          Depending on your location, you may have certain rights regarding your
          personal information, such as the right to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Request access to the personal information we hold about you.</li>
          <li>
            Ask us to correct inaccurate information or, in some cases, delete
            it.
          </li>
          <li>
            Object to certain types of processing, or withdraw consent where
            processing is based on your consent.
          </li>
        </ul>
        <p className="mt-2">
          If you would like to exercise any of these rights, please contact us
          using the contact details below. We may need to verify your identity
          before responding to your request.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">8. Children&apos;s Privacy</h3>
        <p>
          The Website is not specifically directed at children under the age of
          13. We do not knowingly collect personal information from children
          under 13. If you believe that a child has provided us with personal
          information, please contact us so that we can delete it where
          appropriate.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          9. Changes to This Privacy Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time, for example to
          reflect changes in the Website or applicable laws. When we make
          changes, we will update the &quot;Last updated&quot; date at the top
          or bottom of this page. Your continued use of the Website after any
          changes means you accept the updated policy.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">10. Contact</h3>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your information, you can contact us at:{" "}
          <span className="font-mono">[czhenglong451@gmail.com]</span>. Please
          replace this address with a real contact email before publishing.
        </p>
      </section>
    </>
  );
}

/** 中文版隐私政策内容 */
function ZhPrivacyContent() {
  return (
    <>
      <p>
        本隐私政策用于说明您在访问和使用{" "}
        <span className="font-semibold">shiftatmidnight.com</span>
        （以下简称“本网站”“我们”）时，我们如何处理与您相关的信息。本网站是一个非官方的
        Shift at Midnight 游戏粉丝向网站，与游戏开发商或发行商没有正式从属关系。
      </p>

      <section>
        <h3 className="text-base font-semibold mb-2">1. 我们收集的信息</h3>
        <p className="mb-2">
          为了运营和改进本网站，我们在遵循“尽量少收集”的原则下，可能会收集以下几类信息：
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">您主动提供的信息。</span>
            当您通过电子邮件或网站上的联系表单（如有）与我们联系时，我们可能会收到您的邮箱地址、姓名以及您在内容中自愿提供的其他信息。
          </li>
          <li>
            <span className="font-medium">日志和使用数据。</span>
            与大多数网站类似，我们的服务器在您访问本网站时，可能会自动记录一些技术信息，例如 IP
            地址、浏览器类型、大致地理位置、访问页面以及请求的日期和时间等。
          </li>
          <li>
            <span className="font-medium">Cookies 及类似技术。</span>
            我们可能会使用 Cookies 或类似技术来记住您的偏好（例如语言选择），并了解访客如何使用本网站。如果启用了第三方分析工具，它们也可能设置自己的
            Cookies。
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">2. 我们如何使用这些信息</h3>
        <p className="mb-2">我们可能将收集到的信息用于：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>运营、维护并改进本网站及其内容。</li>
          <li>在您联系我们时回复您的问题、请求或反馈。</li>
          <li>监控网站性能、发现并排查技术问题，以及防范滥用或恶意行为。</li>
          <li>以汇总、统计的方式分析访问情况，了解哪些页面或内容对访客最有价值。</li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">3. Cookies 与分析工具</h3>
        <p className="mb-2">
          Cookies 是存储在您设备上的小型文本文件，可以帮助网站记住您的设置和偏好。
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-medium">必要 Cookies。</span>
            用于提供核心功能，例如记住您的语言选择、基础安全设置等。
          </li>
          <li>
            <span className="font-medium">分析类 Cookies（如有）。</span>
            我们可能会使用注重隐私的分析工具来了解整体访问情况，这些工具通常会尽量避免收集可直接识别个人身份的信息。
          </li>
        </ul>
        <p className="mt-2">
          您可以在浏览器设置中禁用 Cookies，但这可能会导致本网站的部分功能无法正常使用。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">4. 第三方链接和内容</h3>
        <p>
          本网站包含指向第三方网站和服务的链接，例如 Itch.io、Steam、GitHub
          以及其他与 Shift at Midnight 相关的外部资源。我们无法控制这些第三方网站，也不对其隐私做法或内容负责。离开本网站后，建议您查阅所访问网站的隐私政策。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">5. 信息保留期限</h3>
        <p>
          我们仅在为运营、保障和改进本网站所必需的期限内保留日志和分析数据。您发送给我们的邮件信息，在回复您的问题并为维持合理记录所需的期限内予以保留；如您要求删除且我们在法律允许的情况下也可以删除。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">6. 信息安全</h3>
        <p>
          我们会采取合理的技术和管理措施来保护我们所持有的信息，防止其被丢失、滥用或遭到未授权访问。但需要说明的是，通过互联网传输或电子存储的信息并非百分之百安全，我们无法做出绝对安全的保证。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">7. 您的权利与选择</h3>
        <p className="mb-2">
          根据您所在国家或地区的法律，您可能享有以下与个人信息相关的权利，例如：
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>请求访问我们所持有的关于您的个人信息；</li>
          <li>在信息不准确时，要求更正或在特定情况下要求删除；</li>
          <li>在某些情况下反对或限制特定处理活动，或在基于同意的处理上撤回您的同意。</li>
        </ul>
        <p className="mt-2">
          如您希望行使上述权利，可通过下文提供的方式与我们联系。在回应您的请求之前，我们可能需要对您的身份进行合理验证。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">8. 未成年人隐私</h3>
        <p>
          本网站并非专门面向 13
          岁以下儿童。我们不会明知地收集 13 岁以下儿童的个人信息。如您认为儿童向我们提供了个人信息，请与我们联系，我们会在适当情况下予以删除。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">9. 本隐私政策的变更</h3>
        <p>
          我们可能会不时更新本隐私政策，例如为了反映网站功能或适用法律的变化。若有更新，我们会在本页面顶部或底部标注“最后更新”日期。您在变更后继续使用本网站，即视为接受更新后的政策。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">10. 联系我们</h3>
        <p>
          如您对本隐私政策或我们如何处理您的信息有任何问题，欢迎通过以下方式联系我们：
          <span className="font-mono">[czhenglong451@gmail.com]</span>
          。请在正式上线前，将此邮箱替换为您的实际联系邮箱。
        </p>
      </section>
    </>
  );
}
