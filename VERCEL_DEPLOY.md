# Vercel 部署指南

## 🚀 一键部署步骤

### 方法 1: 通过 GitHub 自动部署（推荐）

#### 步骤 1: 推送到 GitHub
```bash
cd /Users/xufan3/Desktop/kimi/opcg-gallery/my-app

# 添加远程仓库
git remote add origin https://github.com/Luffy-D-Monkey666/opcg-gallery.git

# 推送代码
git branch -M main
git push -u origin main
```

#### 步骤 2: Vercel 自动部署
1. 访问 https://vercel.com/new
2. 点击 **Import Git Repository**
3. 选择 `Luffy-D-Monkey666/opcg-gallery`
4. 点击 **Deploy**
5. 等待 1-2 分钟，自动获得域名：`https://opcg-gallery.vercel.app`

---

### 方法 2: Vercel CLI 手动部署

#### 安装 Vercel CLI
```bash
npm i -g vercel
```

#### 登录并部署
```bash
cd /Users/xufan3/Desktop/kimi/opcg-gallery/my-app

# 登录 Vercel（浏览器会打开授权页面）
vercel login

# 部署
vercel --prod
```

#### 首次部署配置
```
? Set up and deploy "~/Desktop/kimi/opcg-gallery/my-app"? [Y/n] y
? Which scope do you want to deploy to? [你的用户名]
? Link to existing project? [n]
? What's your project name? [opcg-gallery]
? In which directory is your code located? [./]
```

---

### 方法 3: Vercel 网页直接上传

1. 访问 https://vercel.com/new
2. 点击 **Import Git Repository** 下方的 **Continue with Template**
3. 选择 **Next.js**
4. 下载你的代码并上传

---

## ✅ 部署前检查清单

- [ ] 代码已推送到 GitHub
- [ ] package.json 配置正确
- [ ] next.config.js 设置了 `output: 'export'`
- [ ] Vercel 账户已创建（可用 GitHub 账号登录）

---

## 🔧 部署配置说明

### 当前配置 (next.config.js)
```javascript
{
  output: 'export',      // 静态导出
  distDir: 'dist',       // 输出目录
  images: {
    unoptimized: true,   // 静态导出需要禁用图片优化
  },
}
```

### Vercel 自动识别
- 框架: Next.js
- 构建命令: `next build`
- 输出目录: `dist`

---

## 🌐 部署后地址

| 环境 | 地址 |
|------|------|
| 生产环境 | `https://opcg-gallery.vercel.app` |
| 预览环境 | 每次 PR 自动生成 |

---

## 🔄 自动更新

**绑定 GitHub 后**：
- 每次 `git push` 自动重新部署
- 每次 PR 自动生成预览链接
- 无需手动操作

---

## ❓ 常见问题

### Q: 部署失败怎么办？
**A**: 
1. 检查 `next.config.js` 是否有 `output: 'export'`
2. 检查 Vercel 构建日志
3. 确保所有依赖在 `package.json` 中

### Q: 自定义域名？
**A**: 
1. Vercel 项目 → Settings → Domains
2. 添加你的域名 `opcg-gallery.com`
3. 按提示配置 DNS

### Q: 如何更新？
**A**: 
```bash
git add .
git commit -m "更新内容"
git push origin main
# Vercel 自动重新部署
```

---

## 📞 需要帮助？

如果部署遇到问题，告诉我：
1. 你使用的方法 1/2/3
2. 错误信息截图
3. 我可以远程协助
