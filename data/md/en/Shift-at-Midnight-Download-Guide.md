# Shift at Midnight Download Guide: How to Install, Launch, and Update the Game

You’ve seen the clips. You’ve heard people yelling about doppelgangers and gas stations. Now you just want one thing:

> “How do I actually get **Shift at Midnight** running on my PC without breaking anything?”

This guide walks you through **where to download the game, how to install it, what specs you need, how to deal with Windows security pop-ups, and how to update or fix common issues**.

No fluff, just step-by-step instructions.

---

## Where to Download

Right now there are three main “lanes” for Shift at Midnight:

### 1. Itch.io – Free Single-Player Demo

- Official single-player horror demo by the developer **bun muen**. :contentReference[oaicite:5]{index=5}  
- Great if you just want to test the core vibe:
  - Run the gas station  
  - Check IDs  
  - Survive your first night

You’ll find it on the developer’s Itch.io page under **“Shift At Midnight”**.

### 2. Steam – Main Game Page + Multiplayer Demo

- **Shift At Midnight** has a Steam store page where you can wishlist the full game and access a **multiplayer demo**. :contentReference[oaicite:6]{index=6}  
- The multiplayer demo:
  - Supports **1–3 players co-op**  
  - Limits you to a few pre-scripted shifts so you get a curated feel for the game  
  - The full version aims for highly randomized runs later

If you’re a Steam enjoyer and plan to play co-op, this is the lane you’re going to live in.

### 3. GitHub – Windows Demo Mirror

Some fan sites (like the one you’re building) host a **direct ZIP download** of the Windows demo on GitHub releases.

- This is basically a **mirror** of the demo build.  
- It’s convenient for people who just want to:
  - Click  
  - Download ZIP  
  - Unzip  
  - Run `ShiftAtMidnight.exe`

**Golden rule:**  
Only download from trusted links (official Itch.io page, Steam, or well-known mirrors). If a random site offers a “super special cracked build”… maybe don’t.

---

## System Requirements

Good news: the demo is pretty lightweight by modern standards.

Based on recent system requirement listings and community tests, you’re roughly looking at this ballpark: :contentReference[oaicite:7]{index=7}  

### Minimum (Demo / Early Builds)

- **OS:** Windows 10 (64-bit)  
- **CPU:** Intel Core i3-2100 or similar dual-core  
- **RAM:** 4 GB  
- **GPU:** Something around a **GTX 750 Ti / RX 460** level with 2 GB VRAM  
- **Storage:** A few GB of free space  
- **Network:** Broadband (for co-op / Steam)

If your PC is from the last 8–10 years and can handle other indie horror titles, you’re probably fine.

### Recommended

- **OS:** Windows 10/11 (64-bit)  
- **CPU:** Intel Core i5-6500 or equivalent  
- **RAM:** 8 GB  
- **GPU:** GTX 1050 Ti / RX 560 or better with 4 GB VRAM  
- **Storage:** Extra space for updates / recordings

If you’re on the edge, don’t worry — you can always drop settings to Low and tweak resolution to squeeze a bit more performance.

---

## Step-by-Step Installation

Let’s go through all three main paths one by one.

### A. Installing the Itch.io Demo

1. **Open the official Itch.io page** for Shift At Midnight.  
2. Click **Download** on the Windows build.  
3. Save the `.zip` file somewhere you can find it (Downloads, Desktop, etc.).  
4. When it finishes downloading:
   - Right-click the ZIP → **Extract All…**  
   - Choose a folder (e.g. `C:\Games\ShiftAtMidnight`)  
5. Inside the extracted folder, look for:
   - `ShiftAtMidnight.exe` or similarly named application file.  
6. Double-click it to start the game.

If Windows asks “Are you sure?” — we’ll cover that in the next section.

Some players on Itch have shared exactly this kind of flow: download ZIP, double-click, extract, then run the EXE. :contentReference[oaicite:8]{index=8}  

### B. Installing the Steam Demo

1. Open **Steam** on your PC.  
2. In the store, search for **“Shift At Midnight”**.  
3. On the store page:
   - If there’s a **“Download Demo”** or **“Install”** button, click it.  
   - If not, at least hit **“Wishlist”** so you’re ready for future builds.  
4. Steam will ask which drive to install to. Pick one and confirm.  
5. Wait for the demo to download and install.  
6. Hit **Play** from your Steam library when it’s done.

Steam will handle future updates automatically, so this is the lowest-maintenance option.

### C. Installing From a GitHub ZIP (Mirror)

If you grabbed the game from a GitHub release:

1. Click the **`.zip`** file (for example, `ShiftAtMidnight.zip`).  
2. Save it to your PC.  
3. Once downloaded:
   - Right-click the ZIP → **Extract All…**  
   - Choose an install folder (e.g. `D:\Games\ShiftAtMidnight_Demo`).  
4. Inside the folder, find the EXE (e.g. `ShiftAtMidnight.exe`).  
5. Double-click to launch.

If Windows flags it as from an “Unknown publisher”, that just means it’s not signed like a big AAA release. See next section for security prompts.

---

## First Launch & Common Security Prompts

If you’re on Windows, you’ll probably meet the famous blue box:

> **“Windows protected your PC”**

This is **Windows SmartScreen** saying “Hey, I don’t recognize this file.” That’s normal for small indie games and fan-hosted mirrors.

### When You See “Windows Protected Your PC”

1. On the blue SmartScreen window, click **“More info”**.  
2. Check the details:
   - File name  
   - Publisher (might be “Unknown” for small indie games)  
3. If you’re 100% sure you downloaded from a trusted source:
   - Click **“Run anyway”**.

If you’re *not* sure where it came from, **stop there** and re-download from the official Itch.io or Steam page. Don’t gamble your PC for one night shift.

### Antivirus / Windows Defender Warnings

Sometimes your antivirus might:

- Quarantine the EXE  
- Warn about an unknown app

Again, this is common with small Unity/Unreal/indie projects that don’t have a long reputation yet.

If you’re confident it’s the legit demo:

1. Open your antivirus / Windows Security.  
2. Go to **Virus & threat protection → Protection history**.  
3. Find the blocked file.  
4. Choose **Allow** or **Restore** (wording depends on your antivirus).  
5. Add the folder to **exclusions** if it keeps complaining.

If anything feels sketchy or your antivirus shows a real threat name, delete the file and re-download from an official source.

---

## How to Update to New Version

Shift At Midnight is under active development, which means updates and newer builds are going to happen.

### Updating on Steam

Super easy:

- Steam will **auto-update** the demo or full game when a new version drops.  
- If something seems out of date:
  - Right-click the game in your Steam Library  
  - Click **Properties → Installed Files → Verify integrity**  
  - Steam will check and fix missing files

### Updating on Itch.io

On Itch:

1. Check the **Shift At Midnight** page for a new version or updated date.  
2. Download the latest ZIP.  
3. Extract it into a **new folder** (don’t overwrite old files blindly).  
4. Once you’re sure it runs fine, you can delete the older version’s folder.

### Updating a GitHub Demo Mirror

If you’re using a GitHub mirror:

1. Go to the release page and check the **version tag** (e.g. `v1.00`, `v1.01`).  
2. If there’s a new version:
   - Download the new ZIP.  
   - Extract it to a separate folder.  
3. Launch the new EXE.  
4. If everything’s good, you can delete the old folder to save space.

---

## Troubleshooting (Common Issues & Fixes)

### 1. Game Doesn’t Launch At All

**Symptoms:**

- You double-click the EXE and nothing happens, or  
- You get a quick flash and it crashes

**Try this:**

1. Run the game as **Administrator** (right-click → *Run as administrator*).  
2. Make sure Windows is fully updated.  
3. Update your **graphics drivers** (NVIDIA / AMD / Intel).  
4. If the game mentions any missing runtime (like Visual C++ or .NET), install it from official Microsoft links.

### 2. Game Launches but Mouse Doesn’t Work Properly

Some players reported that the demo would open but **ignore mouse movement in-game** while the cursor still worked in the menu. :contentReference[oaicite:9]{index=9}  

Things to try:

- Click inside the game window and press `Alt+Enter` to toggle **full-screen / windowed**.  
- Tap `Esc` to go to the menu, then back into the game.  
- Check the **Controls** menu to confirm mouse look is actually bound.  
- Make sure no overlay (recording software, other apps) is stealing mouse focus.

If all else fails, try **re-launching** the game or reinstalling it in a clean folder.

### 3. Zip Won’t Extract / Shows Errors

If your ZIP file refuses to extract:

1. Delete the broken ZIP.  
2. Download it again (ideally from Itch.io or Steam). Slow or unstable internet can corrupt large downloads.  
3. Use a solid tool like **7-Zip** or **WinRAR** to extract.  
4. If Windows blocks the file, right-click → **Properties** → tick **“Unblock”** if that option appears, then extract again.

### 4. Antivirus Keeps Deleting the EXE

If every time you extract the game, your antivirus instantly nukes it:

1. Open your antivirus or Windows Security dashboard.  
2. Find where it quarantined the file.  
3. If you’re sure the file came from a legitimate source, mark it as **allowed** / **restore**. :contentReference[oaicite:10]{index=10}  
4. Add the game folder to your antivirus **exclusion list**.

Again: if you have *any* doubt it’s legit, don’t fight your antivirus — re-download from official links.

### 5. Performance Is Terrible

If you’re getting a choppy slideshow:

1. Go to **Settings → Graphics**.  
2. Lower:
   - Shadows  
   - Post-processing  
   - Resolution scale  
3. Turn off:
   - Motion blur  
   - Depth of field (if available)  
4. Close background apps: browser tabs, launchers, Discord overlays etc.

If your PC is under or near the minimum specs, running at 900p or even 720p with low settings is totally fine. Survival > ego.

---

## Final Tips Before Your First Shift

- **Play the Itch.io demo first** to get a feel for the interrogation and horror pacing.  
- If you love it, **wishlist on Steam** so you don’t miss the full co-op release and future demo updates. :contentReference[oaicite:11]{index=11}  
- Keep your demo updated — devs are actively patching bugs and tweaking features based on community feedback.

Once you’re installed and ready, hop over to the **Game Guide** and learn how not to accidentally let a doppelganger shop in peace.

Now go clock in. The graveyard shift is waiting.
