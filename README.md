# ◈ MAGI SYSTEM 三贤者决策系统

> **Version 3.0.0** | Single Provider Architecture

受《新世纪福音战士》中 MAGI 超级计算机启发的多 AI 决策系统。三个贤者节点基于同一 AI 模型，通过不同的人格设定，从多个角度分析问题并投票表决。

![MAGI System](https://img.shields.io/badge/Version-3.0.0-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![AI](https://img.shields.io/badge/AI-Doubao-orange)

---

## 🎯 特性

- **三贤者表决**: 三个节点独立分析，2/3 多数决通过
- **人格化设定**: 
  - 🔵 **CASPER-3** — 理性分析（冷静客观）
  - 🟠 **BALTHASAR-2** — 逻辑推演（严谨结构化）
  - 🟣 **MELCHIOR-1** — 深度计算（科技感数据化）
- **单模型对话**: 支持与单个节点深度对话
- **赛博朋克 UI**: EVA 风格终端界面，CRT 扫描线效果
- **简化配置**: 统一 API 提供商，降低使用门槛

---

## 🚀 快速开始

### 1. 配置 API

打开 `MAGI-SYSTEM-index.html`，找到配置区域：

```javascript
const CONFIG = {
  apiEndpoint: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
  apiKey: 'YOUR_API_KEY_HERE',  // ⚠️ 替换为你的 API Key
  model: 'YOUR_MODEL_ID_HERE',  // ⚠️ 替换为你的模型 ID
  
  nodes: {
    casper: { /* ... */ },
    balthasar: { /* ... */ },
    melchior: { /* ... */ }
  }
};
```

### 2. 获取 API Key

详细配置教程请查看：[**API 配置指南**](./API-SETUP-GUIDE.md)

**简要步骤**:
1. 访问 [火山引擎方舟控制台](https://console.volcengine.com/ark)
2. 创建 API Key
3. 创建模型推理接入点（Endpoint）
4. 复制 API Key 和模型 ID 到配置中

### 3. 运行

直接用浏览器打开 `MAGI-SYSTEM-index.html` 即可。

无需服务器，无需构建工具。

---

## 💡 使用方式

### 三贤者表决模式

1. 在输入框输入问题
2. 点击 **"执行"**
3. 三个节点独立分析并投票
4. 2/3 多数决给出最终决议

### 单模型对话模式

1. 点击 **"单模型对话"**
2. 选择任意节点（CASPER/BALTHASAR/MELCHIOR）
3. 进行深度对话
4. 每个节点保持独立的对话历史

---

## 🎨 人格设定

| 节点 | 职责 | 风格特点 |
|------|------|----------|
| **CASPER-3** | 理性分析 | 冷静客观、分点分析、注重事实和风险 |
| **BALTHASAR-2** | 逻辑推演 | 严谨结构化、使用逻辑符号、展示推演过程 |
| **MELCHIOR-1** | 深度计算 | 科技感数据化、进度条百分比、多层计算 |

---

## ⚙️ 高级配置

### 自定义人格

修改 `systemPrompt` 字段：

```javascript
casper: {
  name: 'CASPER-3',
  subtitle: '理性分析',
  systemPrompt: '你是 MAGI 系统中的 CASPER-3，负责理性分析。你的特点是：...'
}
```

### 自定义模型

支持任何 OpenAI 兼容 API 格式的模型：

```javascript
const CONFIG = {
  apiEndpoint: 'https://其他平台的 API 端点',
  apiKey: '其他平台的 API Key',
  model: '其他平台的模型 ID'
};
```

---

## 📁 文件结构

```
MAGI-SYSTEM/
├── MAGI-SYSTEM-index.html    # 主程序（单文件）
├── API-SETUP-GUIDE.md        # API 配置指南
├── CHANGELOG-v3.md           # v3.0 更新说明
└── README.md                 # 本文件
```

---

## ⚠️ 安全提示

- **不要**将包含真实 API Key 的文件上传到公开仓库
- 当前版本 API Key 存储在客户端，仅适合**个人本地使用**
- 生产环境请使用后端代理 API 请求

---

## 🆘 常见问题

### API ERROR 401
API Key 无效，检查是否正确复制。

### API ERROR 404
模型 ID 错误，检查是否填写正确的 Endpoint ID。

### API 配置缺失
未填写 apiKey 或 model，替换占位符 `YOUR_API_KEY_HERE`。

更多问题请查看 [**API 配置指南**](./API-SETUP-GUIDE.md)

---

## 📚 技术栈

- **纯前端**: HTML + CSS + JavaScript
- **零依赖**: 无需 npm、webpack 等构建工具
- **API**: 火山引擎豆包 (Doubao) LLM
- **UI**: EVA/MAGI 风格赛博朋克设计

---

## 🎬 演示

<img width="1302" height="815" alt="截屏2026-04-29 02 03 57" src="https://github.com/user-attachments/assets/0aad79fd-aa8f-4d8f-8ec7-3c72f3b71541" />

<img width="1350" height="812" alt="截屏2026-04-29 02 04 35" src="https://github.com/user-attachments/assets/1d4fd99a-f3ff-48ac-af48-b93bcaec0023" />


*系统界面*

---

## 📄 许可证

MIT License

---

## 🙏 致谢

- 灵感来源：《新世纪福音战士》（GAINAX / KHARA）
- AI 支持：火山引擎豆包 (Doubao)
- 这是一个粉丝制作的教育/娱乐项目

---

## 🔗 链接

- **API 配置指南**: [API-SETUP-GUIDE.md](./API-SETUP-GUIDE.md)
- **更新日志**: [CHANGELOG-v3.md](./CHANGELOG-v3.md)
- **火山引擎**: https://www.volcengine.com/
- **方舟控制台**: https://console.volcengine.com/ark

---
## 重要提醒

#如何绑定：
1. 打开index文档： 找到"===== CONFIGURATION ====="配置项目 
2. 找到对应如：  apiEndpoint: '',  // 配置你的豆包 API 端点   
              apiKey: '',       // 配置你的豆包 API Key  （个人API key 不轻易对外透露）   
3. 注意：提供个人的API 需要去大模型网站上自行申请

相关教程参考：

🧙 MAGI-SYSTEM 免费开源，仅供个人学习、非商用使用。
如需 商用部署、团队自用、二次改版、白标私有化使用，
请联系作者购买商业授权，尊重个人开发成果。
部署时候遇到问题也欢迎 +微："pdlmax" 讨论/合作 
项目制作不易，如果觉得好用，也欢迎赞助，支持更新。
---

**Made with ◈ by Peter Pan**  
**Version 3.0.0** | **2026-04-29**
