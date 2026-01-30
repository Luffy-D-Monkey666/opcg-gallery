#!/bin/bash

# OPCG Gallery 构建脚本

echo "🚀 开始构建 OPCG Gallery..."

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建
echo "🔨 构建项目..."
npm run build

echo "✅ 构建完成！"
echo "📁 输出目录: dist/"
echo "🌐 本地预览: npx serve dist"
