import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("game");
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function GamePage() {
  const t = await getTranslations("game");

  return (
    <div className="container mx-auto py-12 space-y-16 min-h-screen">
      {/* 顶部面包屑 + 标题区，结构和 Changelog 一致 */}
      <section className="text-center space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {t("homeBtn")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("gameBtn")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-5xl tracking-tight pt-10">
          {t("h1")}
        </h1>
        <h2 className="mx-auto max-w-[700px] opacity-60 md:text-xl">
          {t("h2")}
        </h2>

        {/* 行动按钮：玩游戏 + 跳到下载区 */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <Link
            href="#download"
            className="inline-flex items-center rounded-md border border-transparent px-6 py-2 text-sm font-medium shadow-sm bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            {t("cta_play")}
          </Link>
          <Link
            href="#requirements"
            className="inline-flex items-center rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted transition"
          >
            {t("cta_requirements")}
          </Link>
        </div>
      </section>

      {/* 概览 + 关键信息 */}
      <section className="grid gap-8 lg:grid-cols-3 items-start">
        <div className="space-y-4 lg:col-span-2 text-left">
          <h3 className="text-xl font-semibold">{t("overview_title")}</h3>
          <p className="leading-relaxed">
            Shift at Midnight is an online co-op detective horror game for 1–3
            players. You work the graveyard shift at a remote 90s gas station
            where some of your “customers” are actually doppelgängers hiding
            among humans. Your job is to question them, check their ID, and
            decide who to let go and who to stop at all costs.
          </p>
          <p className="leading-relaxed">
            Each night you juggle two very different responsibilities:
            interrogating suspicious visitors and running the store. You’ll
            restock shelves, order supplies, set up traps and barricades, and
            then drop everything when things go wrong—like when a creature
            breaks loose and turns the gas station into a hunting ground.
          </p>
          <p className="leading-relaxed">
            The full game focuses on replayability: recurring characters,
            random events, and escalating threats mean no two shifts feel the
            same. Whether you play solo or with friends, every decision during
            your shift can be the difference between surviving the night or
            becoming tomorrow’s headline.
          </p>
        </div>

        {/* 右侧“游戏卡片” */}
        <aside className="border rounded-2xl p-6 space-y-3 bg-muted/40">
          <h3 className="text-lg font-semibold">{t("quick_facts_title")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="font-medium">{t("label_developer")}:</span>{" "}
              Bun Muen
            </li>
            <li>
              <span className="font-medium">{t("label_publisher")}:</span>{" "}
              Kwalee
            </li>
            <li>
              <span className="font-medium">{t("label_genre")}:</span>{" "}
              Co-op horror, detective, simulation
            </li>
            <li>
              <span className="font-medium">{t("label_players")}:</span>{" "}
              1–3 players (online co-op)
            </li>
            <li>
              <span className="font-medium">{t("label_perspective")}:</span>{" "}
              First-person
            </li>
            <li>
              <span className="font-medium">{t("label_platform")}:</span>{" "}
              PC (Windows demo via Itch.io, Steam)
            </li>
          </ul>
        </aside>
      </section>

      {/* 核心特色 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">{t("features_title")}</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("feature_interrogate_title")}</h4>
            <p className="text-sm leading-relaxed">
              Shift at Midnight mixes Papers-Please-style ID checks with horror.
              For each customer, you compare their ID against the computer,
              watch their body language, and choose up to a limited number of
              questions. One wrong judgment can let a monster through—or make
              you attack an innocent person.
            </p>
          </div>
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("feature_board_title")}</h4>
            <p className="text-sm leading-relaxed">
              If a creature escapes into the station, the game shifts into pure
              survival. You&apos;ll board up doors, place bear traps and other
              defenses, and find safe spots to hide while listening for audio
              cues that reveal where the threat is moving.
            </p>
          </div>
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("feature_management_title")}</h4>
            <p className="text-sm leading-relaxed">
              Nightly deliveries bring both store stock and survival tools.
              You&apos;ll keep shelves filled while deciding how to spend your
              limited budget on ammo, traps, and barricades. Poor planning can
              leave you under-equipped when the worst happens.
            </p>
          </div>
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("feature_coop_title")}</h4>
            <p className="text-sm leading-relaxed">
              The full version is built around co-op: one player can focus on
              questioning, another on defenses, and another on deliveries and
              repairs. With 1–3 players, coordination and clear roles make each
              shift smoother—or more chaotic.
            </p>
          </div>
        </div>
      </section>

      {/* 系统配置 */}
      <section id="requirements" className="space-y-6">
        <h3 className="text-2xl font-semibold">{t("requirements_title")}</h3>
        <p className="text-sm opacity-80">
          These specs are based on the current Steam demo and recent coverage.
          Requirements may change as development continues.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("requirements_min_title")}</h4>
            <ul className="text-sm space-y-1">
              <li>OS: Windows 10 (64-bit)</li>
              <li>CPU: Intel Core i3-2100 / AMD FX-4300 or similar</li>
              <li>Memory: 4 GB RAM</li>
              <li>
                Graphics: NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 260X (2 GB
                VRAM)
              </li>
              <li>Network: Broadband internet connection</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("requirements_rec_title")}</h4>
            <ul className="text-sm space-y-1">
              <li>OS: Windows 10 (64-bit)</li>
              <li>CPU: Intel Core i5-6500 / AMD Ryzen 3 1200 or similar</li>
              <li>Memory: 8 GB RAM</li>
              <li>
                Graphics: NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560 (4 GB
                VRAM)
              </li>
              <li>Network: Broadband internet connection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 基本操作 / 键位说明 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">{t("controls_title")}</h3>
        <p className="text-sm opacity-80">
          Exact keybindings can change between versions, but the demo follows
          standard PC horror game controls. You can always check or remap
          controls in the in-game settings menu.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("controls_movement_title")}</h4>
            <ul className="text-sm space-y-1">
              <li>Move: W / A / S / D</li>
              <li>Look / Aim: Mouse</li>
              <li>Interact / Talk / Use PC: E</li>
              <li>Crouch: Ctrl</li>
              <li>Sprint: Shift (in some demo builds)</li>
            </ul>
          </div>
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">{t("controls_combat_title")}</h4>
            <ul className="text-sm space-y-1">
              <li>Fire weapon: Left mouse button</li>
              <li>Reload: R</li>
              <li>Use flashlight / tool: F (or prompted key)</li>
              <li>Open inventory / deliveries: On-screen prompt</li>
              <li>
                Open settings / keybinds: ESC → Settings → Controls (recommended
                to check before playing)
              </li>
            </ul>
          </div>
        </div>

        <div className="border rounded-2xl p-5 space-y-2">
          <h4 className="font-semibold">{t("controls_loop_title")}</h4>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>Serve a customer and check their ID at the counter.</li>
            <li>Ask a limited number of questions and watch their behavior.</li>
            <li>
              Decide whether to approve them as human or treat them as a
              doppelganger.
            </li>
            <li>
              Clean up, restock shelves, and prepare defenses between waves of
              customers.
            </li>
            <li>
              When a major creature appears, board up doors, deploy traps, and
              hide until the danger passes—or fight if you&apos;re prepared.
            </li>
          </ol>
        </div>
      </section>

      {/* 下载链接 / 官方渠道 */}
      <section id="download" className="space-y-6">
        <h3 className="text-2xl font-semibold">{t("download_title")}</h3>
        <p className="text-sm opacity-80">
          Always prioritize the official demo and store pages below so you can
          support the developer and get the latest version of the game.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">Itch.io Demo</h4>
            <p className="text-sm leading-relaxed">
              Free single-player demo hosted by the developer. Great if you just
              want to test the core horror and interrogation mechanics.
            </p>
            <Link
              href="https://bunmuen.itch.io/shiftatmidnight"
              target="_blank"
              className="inline-flex text-sm font-medium underline underline-offset-4"
            >
              Open Itch.io page
            </Link>
          </div>

          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">Steam Page</h4>
            <p className="text-sm leading-relaxed">
              Wishlist the full game and download the official multiplayer demo
              when available. This is the best way to follow development
              progress.
            </p>
            <Link
              href="https://store.steampowered.com/app/3722330/Shift_At_Midnight/"
              target="_blank"
              className="inline-flex text-sm font-medium underline underline-offset-4"
            >
              Open Steam store page
            </Link>
          </div>

          <div className="border rounded-2xl p-5 space-y-2">
            <h4 className="font-semibold">Windows Demo (GitHub mirror)</h4>
            <p className="text-sm leading-relaxed">
              A direct download mirror of the Windows demo. If this link ever
              stops working, please use the official Itch.io or Steam links
              above instead.
            </p>
            <Link
              href="https://github.com/codeczl/shiftatmidnight/releases/download/v1.00/ShiftAtMidnight.zip"
              target="_blank"
              className="inline-flex text-sm font-medium underline underline-offset-4"
            >
              Download ZIP from GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
