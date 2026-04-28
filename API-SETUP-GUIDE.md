# 🔐 MAGI SYSTEM API 配置指南

本指南将帮助你完成火山引擎豆包 API 的配置，让 MAGI SYSTEM 三贤者决策系统正常运行。

---

## 📋 目录

1. [获取 API Key](#1-获取-api-key)
2. [创建模型实例](#2-创建模型实例)
3. [配置到项目中](#3-配置到项目中)
4. [测试验证](#4-测试验证)
5. [常见问题](#5-常见问题)

---

## 1. 获取 API Key

### 步骤 1: 访问火山引擎控制台

打开浏览器，访问火山引擎方舟大模型平台：
👉 https://console.volcengine.com/ark

### 步骤 2: 登录/注册

- 使用火山引擎账号登录
- 如果没有账号，请先注册并完成实名认证

### 步骤 3: 创建 API Key

1. 在左侧导航栏找到 **"密钥管理"** 或 **"API Key"**
2. 点击 **"创建新密钥"**
3. 为密钥命名（例如：`MAGI-SYSTEM`）
4. 复制生成的 API Key，格式类似：
   ```
   ark-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```

> ⚠️ **重要提示**: API Key 只显示一次，请立即保存！

---

## 2. 创建模型实例

### 步骤 1: 进入模型页面

在方舟控制台左侧导航栏，点击 **"模型"** → **"模型广场"**

### 步骤 2: 选择模型

推荐使用以下模型之一：

| 模型 | 特点 | 适用场景 |
|------|------|----------|
| **Doubao-pro-4k** | 综合能力强，响应快 | 日常对话、文本生成 |
| **Doubao-pro-32k** | 长文本处理能力强 | 文档分析、长对话 |
| **Doubao-lite-4k** | 轻量级，成本低 | 简单任务、高频调用 |

### 步骤 3: 创建推理接入点

1. 点击选择的模型卡片
2. 点击 **"创建推理接入点"** 或 **"创建 Endpoint"**
3. 配置参数：
   - **名称**: 自定义（例如：`magi-endpoint`）
   - **模型**: 选择上一步的模型
   - **实例规格**: 根据需求选择
4. 点击 **"创建"**

### 步骤 4: 获取模型 ID

创建完成后，在接入点列表中找到：
- **模型 ID**（Endpoint ID）: 格式类似 `ep-20260429010109-29tsq`
- **API 端点**: 格式类似 `https://ark.cn-beijing.volces.com/api/v3/chat/completions`

> 📝 记录这两个值，后续配置需要用到

---

## 3. 配置到项目中

### 步骤 1: 打开配置文件

用文本编辑器打开 `MAGI-SYSTEM-index.html`

### 步骤 2: 找到配置区域

搜索 `// ===== CONFIGURATION =====`，找到以下代码：

```javascript
const CONFIG = {
  apiEndpoint: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
  apiKey: 'YOUR_API_KEY_HERE',
  model: 'YOUR_MODEL_ID_HERE',
  
  nodes: {
    // ...
  }
};
```

### 步骤 3: 替换配置值

将三个占位符替换为你自己的值：

```javascript
const CONFIG = {
  // API 端点（通常不需要修改）
  apiEndpoint: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
  
  // 替换为你的 API Key
  apiKey: 'ark-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  
  // 替换为你的模型 ID（Endpoint ID）
  model: 'ep-20260429010109-29tsq',
  
  nodes: {
    // ...
  }
};
```

### 步骤 4: 保存文件

保存 `MAGI-SYSTEM-index.html` 文件

---

## 4. 测试验证

### 方法 1: 直接在浏览器打开

1. 双击 `MAGI-SYSTEM-index.html` 文件
2. 等待系统启动完成
3. 在输入框中输入测试问题，例如：
   ```
   今天天气怎么样？
   ```
4. 点击 **"执行"** 按钮
5. 观察三个节点是否都有响应

### 方法 2: 单模型测试

1. 点击 **"单模型对话"** 模式
2. 选择任意节点（CASPER/BALTHASAR/MELCHIOR）
3. 输入问题并发送
4. 检查是否收到正常回复

### ✅ 成功标志

- 三个节点都显示响应内容
- 响应内容符合各自的人格设定
- 没有显示 `API ERROR` 或 `API 配置缺失`

### ❌ 失败排查

| 错误信息 | 可能原因 | 解决方案 |
|----------|----------|----------|
| `API 配置缺失` | apiKey 或 model 未填写 | 检查配置是否替换了占位符 |
| `API ERROR 401` | API Key 无效 | 检查 API Key 是否正确复制 |
| `API ERROR 404` | 模型 ID 错误 | 检查 model 是否填写正确的 Endpoint ID |
| `API ERROR 429` | 请求频率超限 | 等待片刻或升级配额 |
| `Network Error` | 网络问题 | 检查网络连接，确认能访问火山引擎 |

---

## 5. 常见问题

### Q1: API Key 安全吗？

**A**: 当前版本 API Key 存储在客户端 HTML 文件中，仅适合个人本地使用。**不要**将包含真实 API Key 的文件上传到公开仓库。

**安全建议**:
- ✅ 个人本地使用：没问题
- ✅ 私有仓库：可以
- ❌ 公开仓库：禁止
- ❌ 生产环境：需要后端代理

### Q2: 费用如何计算？

**A**: 火山引擎豆包 API 按 Token 计费，不同模型价格不同。

- **Doubao-lite**: 约 ¥0.0008 / 1K tokens
- **Doubao-pro**: 约 ¥0.008 / 1K tokens

具体价格请参考：https://www.volcengine.com/docs/82379

### Q3: 有免费额度吗？

**A**: 新注册用户通常会有一定的免费额度，具体以火山引擎官方政策为准。

### Q4: 可以更换其他模型吗？

**A**: 可以！只要支持 OpenAI 兼容 API 格式的模型都可以使用。

修改配置即可：
```javascript
apiEndpoint: 'https://其他平台的 API 端点',
apiKey: '其他平台的 API Key',
model: '其他平台的模型 ID'
```

### Q5: 三个节点为什么回答风格不同？

**A**: 通过不同的 `systemPrompt` 实现人格差异：

- **CASPER-3**: 理性分析 → 冷静客观
- **BALTHASAR-2**: 逻辑推演 → 严谨结构化
- **MELCHIOR-1**: 深度计算 → 科技感数据化

可以自定义 `systemPrompt` 来调整人格。

### Q6: 如何调整响应速度？

**A**: 响应速度取决于：
1. 网络延迟（中国大陆建议用北京区域）
2. 模型选择（lite 比 pro 快）
3. 问题复杂度

### Q7: 可以多人共享一个 API Key 吗？

**A**: 技术上可以，但不推荐：
- 配额共享，容易超限
- 费用合并，难以分摊
- 安全风险增加

建议每人使用自己的 API Key。

---

## 📚 相关资源

- **火山引擎方舟控制台**: https://console.volcengine.com/ark
- **API 文档**: https://www.volcengine.com/docs/82379
- **模型价格**: https://www.volcengine.com/docs/82379
- **GitHub 仓库**: https://github.com/PDLMAX/MAGI-SYSTEM

---

## 🆘 需要帮助？

如果遇到问题：

1. 检查本指南是否每一步都完成
2. 查看浏览器控制台（F12）的错误信息
3. 在 GitHub 提交 Issue
4. 联系项目作者

---

**最后更新**: 2026-04-29  
**适用版本**: MAGI SYSTEM v3.0.0+
