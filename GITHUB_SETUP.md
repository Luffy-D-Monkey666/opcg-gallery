# GitHub 推送指南

## 你的项目已准备就绪！

项目位置: `/Users/xufan3/Desktop/kimi/opcg-gallery/my-app`
GitHub 用户名: `Luffy-D-Monkey666`

---

## 📤 推送到 GitHub 步骤

### 步骤 1: 在 GitHub 创建仓库

1. 打开 https://github.com/new
2. Repository name: `opcg-gallery`
3. 选择 **Public**（公开）或 **Private**（私有）
4. **不要勾选** "Initialize this repository with a README"
5. 点击 **Create repository**

### 步骤 2: 推送本地代码

打开终端，运行以下命令：

```bash
cd /Users/xufan3/Desktop/kimi/opcg-gallery/my-app

# 添加远程仓库
git remote add origin https://github.com/Luffy-D-Monkey666/opcg-gallery.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3: 验证

访问 https://github.com/Luffy-D-Monkey666/opcg-gallery
查看代码是否已成功上传。

---

## 🚀 部署到 Vercel（获得预览链接）

### 方法 1: 通过 GitHub 自动部署（推荐）

1. 访问 https://vercel.com/new
2. 使用 GitHub 登录
3. 导入 `opcg-gallery` 仓库
4. 点击 **Deploy**
5. 获得链接: `https://opcg-gallery.vercel.app`

### 方法 2: 手动部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
cd /Users/xufan3/Desktop/kimi/opcg-gallery/my-app
vercel
```

---

## 📁 项目结构

```
my-app/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # 全局样式（Apple风格）
│   │   ├── layout.tsx    # 根布局
│   │   └── page.tsx      # 首页（系列网格）
│   ├── components/       # 组件目录（待开发）
│   └── lib/
│       └── data.ts       # Mock数据
├── public/               # 静态资源
├── package.json          # 依赖配置
├── tailwind.config.ts    # Tailwind主题配置
└── next.config.js        # Next.js配置
```

---

## ✅ 已完成

- [x] Next.js + TypeScript 项目框架
- [x] Tailwind CSS 配置（Apple风格主题）
- [x] 首页 UI（系列网格展示）
- [x] 语言选择器（日/英/简中）
- [x] 搜索功能
- [x] 响应式设计
- [x] Framer Motion 动画
- [x] Git 初始化

## 🔄 待完成

- [ ] 系列详情页
- [ ] 卡片详情页
- [ ] 价格走势图（Recharts）
- [ ] 集换社数据采集调研

---

## 💡 提示

- 每次我更新代码后，运行 `git pull` 拉取最新代码
- 推送前确保在 `my-app` 目录下
- 有问题随时问我！
