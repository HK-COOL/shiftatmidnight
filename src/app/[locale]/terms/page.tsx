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
      ? "使用条款 – Shift at Midnight"
      : "Terms of Service – Shift at Midnight",
    description: isZh
      ? "本页面说明您在使用 shiftatmidnight.com 时适用的基本条款和条件。"
      : "This page sets out the basic terms and conditions that apply when you use shiftatmidnight.com.",
  };
}

export default async function TermsPage() {
  const locale = await getLocale();
  const isZh = locale.startsWith("zh");

  return (
    <div className="container mx-auto py-12 space-y-12 min-h-screen">
      {/* 头部 */}
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
              <BreadcrumbPage>
                {isZh ? "使用条款" : "Terms of Service"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight pt-10">
          {isZh ? "使用条款" : "Terms of Service"}
        </h1>
        <h2 className="mx-auto max-w-[700px] opacity-60 md:text-xl">
          {isZh
            ? "在使用 shiftatmidnight.com 前，请先阅读并理解本页面中的条款。"
            : "Please read these terms carefully before using shiftatmidnight.com."}
        </h2>
      </section>

      {/* 正文 */}
      <section className="max-w-3xl mx-auto space-y-8 text-sm leading-relaxed text-left">
        {isZh ? <ZhTermsContent /> : <EnTermsContent />}
        <p className="text-xs opacity-70 pt-4">
          {isZh
            ? "本使用条款模板仅供一般参考，并不构成法律意见。正式使用前，请根据您所在国家或地区的法律进行调整。"
            : "This terms of service template is provided for general informational purposes only and does not constitute legal advice. You may need to adapt it to the laws of your country or region."}
        </p>
      </section>
    </div>
  );
}

/** 英文版使用条款 */
function EnTermsContent() {
  return (
    <>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of{" "}
        <span className="font-semibold">shiftatmidnight.com</span> (the
        &quot;Website&quot;). By accessing or using the Website, you agree to be
        bound by these Terms. If you do not agree to these Terms, please do not
        use the Website.
      </p>

      <section>
        <h3 className="text-base font-semibold mb-2">1. About This Website</h3>
        <p>
          The Website is an independent, fan-made site dedicated to the game
          &quot;Shift at Midnight&quot;. It provides information, guides and
          links to official resources related to the game. The Website is not
          endorsed by, directly affiliated with, maintained, authorized, or
          sponsored by the game&apos;s developer or publisher. All product names
          and trademarks are the property of their respective owners.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          2. Use of the Website
        </h3>
        <p className="mb-2">
          You agree to use the Website only for lawful purposes and in a manner
          that does not:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Violate any applicable law or regulation;</li>
          <li>
            Infringe the rights of any third party, including intellectual
            property, privacy or other personal rights;
          </li>
          <li>
            Interfere with or disrupt the normal operation of the Website,
            including attempting to probe, scan or test the vulnerability of any
            system or network;
          </li>
          <li>
            Use automated means (such as bots or scrapers) to access the
            Website in a way that imposes an unreasonable load on our
            infrastructure.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">3. Content and Ownership</h3>
        <p className="mb-2">
          Unless otherwise stated, the text, layout and original artwork on the
          Website are owned by the Website operator. Content related to
          &quot;Shift at Midnight&quot; (including game art, logos, names and
          other assets) is owned by the game&apos;s respective rights holders
          and is used here for informational and fan purposes only.
        </p>
        <p>
          You may not copy, reproduce, redistribute or create derivative works
          from the Website&apos;s content except for personal, non-commercial
          use, unless you obtain prior written permission from us or the
          relevant rights holder.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          4. Downloads and External Links
        </h3>
        <p className="mb-2">
          The Website may provide links to third-party platforms such as Itch.io,
          Steam, GitHub or other external sites where you can download game
          demos or related files. Any downloads or purchases from third-party
          sites are solely between you and the third party.
        </p>
        <p className="mb-2">
          In some cases, the Website may provide a mirror link to a Windows demo
          hosted on GitHub or another file host. These mirrors are provided for
          convenience only. We do not modify the original demo files, but we
          cannot guarantee that files hosted by third parties will always be
          safe or free from errors. You are responsible for using appropriate
          antivirus and security measures before running any downloaded files.
        </p>
        <p>
          We are not responsible for any issues, losses or damages arising from
          your use of third-party links, downloads, software or services.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">5. No Warranties</h3>
        <p>
          The Website and all content provided on it are offered on an
          &quot;as is&quot; and &quot;as available&quot; basis. To the fullest
          extent permitted by law, we make no warranties or representations of
          any kind, express or implied, regarding the Website, including but not
          limited to accuracy, reliability, availability or fitness for a
          particular purpose.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          6. Limitation of Liability
        </h3>
        <p>
          To the maximum extent permitted by applicable law, we shall not be
          liable for any indirect, incidental, special, consequential or
          punitive damages, or any loss of data, profits or revenue, arising out
          of or in connection with your use of the Website or any content,
          links, downloads or services accessed through it, even if we have been
          advised of the possibility of such damages.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">
          7. Changes to the Website and These Terms
        </h3>
        <p className="mb-2">
          We may update, modify, suspend or discontinue any part of the Website
          at any time without prior notice. We may also update these Terms from
          time to time. When we do so, we will revise the &quot;Last updated&quot;
          date at the top or bottom of this page.
        </p>
        <p>
          Your continued use of the Website after any changes to these Terms
          indicates your acceptance of the updated Terms. If you do not agree
          with the new Terms, you should stop using the Website.
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">8. Contact</h3>
        <p>
          If you have any questions about these Terms or the Website, you can
          contact us at:{" "}
          <span className="font-mono">[czhenglong451@gmail.com]</span>. Thank you.
        </p>
      </section>
    </>
  );
}

/** 中文版使用条款 */
function ZhTermsContent() {
  return (
    <>
      <p>
        本使用条款（以下简称“本条款”）适用于您对{" "}
        <span className="font-semibold">shiftatmidnight.com</span>
        （以下简称“本网站”）的访问和使用。访问或使用本网站即表示您同意受本条款约束。如您不同意本条款，请不要使用本网站。
      </p>

      <section>
        <h3 className="text-base font-semibold mb-2">1. 关于本网站</h3>
        <p>
          本网站为独立的、由粉丝创建的 Shift at Midnight
          游戏相关信息网站，主要提供与该游戏有关的介绍、攻略以及指向官方资源的链接。本网站与游戏开发商或发行商没有正式隶属、授权或赞助关系。游戏名称、商标及相关素材均归其各自权利人所有。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">2. 网站使用规范</h3>
        <p className="mb-2">您承诺仅在合法、合理的范围内使用本网站，不得：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>违反任何适用的法律、法规或政策；</li>
          <li>侵犯任何第三方的合法权利，包括但不限于知识产权、隐私权或其他人格权；</li>
          <li>
            干扰或破坏本网站的正常运行，包括但不限于尝试探测、扫描或测试任何系统或网络的漏洞；
          </li>
          <li>
            通过自动化方式（如爬虫、机器人等）在未获授权的情况下大量访问本网站，从而对我们基础设施造成不合理负担。
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">3. 内容与权利归属</h3>
        <p className="mb-2">
          除非另有说明，本网站上的文字内容、页面排版和原创图像等由网站运营者享有相应权利。与 Shift at Midnight
          相关的游戏素材（包括但不限于游戏名称、标识、原画等）由其各自权利人享有，本网站仅在粉丝交流和信息介绍范围内引用。
        </p>
        <p>
          除法律允许的合理使用情形外，未经我们或相关权利人事先书面许可，您不得出于商业目的复制、转载、分发本网站内容，或基于本网站内容创作衍生作品。个人非商业性浏览、收藏和分享链接一般不受此限。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">4. 下载链接与第三方网站</h3>
        <p className="mb-2">
          本网站可能提供前往第三方平台（如 Itch.io、Steam、GitHub
          等）的链接，您可在这些平台上下载游戏 Demo 或相关文件。您在第三方网站上的下载、购买和使用行为，仅在您与该第三方之间发生，本网站不参与其中。
        </p>
        <p className="mb-2">
          在某些情况下，本网站可能提供托管于 GitHub
          或其他文件托管服务上的 Windows Demo
          镜像下载链接。这类镜像仅为方便访问而提供，我们不会主动修改演示文件本身，但我们无法保证第三方托管文件在任何时候都绝对安全或不存在错误。请在下载和运行文件前，自行承担风险并使用合适的安全软件进行查杀。
        </p>
        <p>
          您因使用任何第三方链接、下载、软件或服务而产生的风险和后果（包括但不限于数据丢失、设备损坏或其他损失），由您自行承担，本网站不承担相应责任。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">5. 免责声明</h3>
        <p>
          本网站及其上提供的所有内容均以“按现状”和“按可用性”的方式提供。在法律允许的最大范围内，我们不对本网站的内容、可用性、准确性或适用性做出任何明示或暗示的保证或承诺。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">6. 责任限制</h3>
        <p>
          在适用法律允许的最大范围内，因您使用或无法使用本网站、依赖本网站内容或通过本网站访问的任何第三方链接、下载或服务而导致的任何间接、附带、特殊、后果性或惩罚性损害，或任何数据、利润、收入的损失，我们概不负责，即使我们已被告知可能发生上述损害。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">7. 条款变更和网站调整</h3>
        <p className="mb-2">
          我们有权在任何时间对本网站的全部或部分内容进行修改、更新、中止或终止，且无需事先通知。我们也可能不时更新本条款，如有更新，我们会在本页面顶部或底部标注“最后更新”日期。
        </p>
        <p>
          您在条款更新后继续使用本网站，即视为您接受更新后的条款。如您不同意新的条款，应立即停止使用本网站。
        </p>
      </section>

      <section>
        <h3 className="text-base font-semibold mb-2">8. 联系方式</h3>
        <p>
          如您对本条款或本网站有任何疑问，欢迎通过以下方式与我们联系：
          <span className="font-mono">[czhenglong451@gmail.com]</span>
        </p>
      </section>
    </>
  );
}
