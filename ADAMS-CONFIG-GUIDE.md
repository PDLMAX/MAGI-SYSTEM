# ADAMS 容器配置面板使用指南

MAGI SYSTEM 的 ADAMS 容器配置面板允许您通过图形界面配置 API 参数，无需修改代码。

## 🎯 功能概述

- **可视化配置**：通过 UI 界面配置 API 端点、模型名称和 API Key
- **本地存储**：配置信息保存在浏览器本地存储中
- **即时生效**：配置保存后立即生效，无需重启系统

## 📍 访问方式

1. 打开 MAGI SYSTEM 页面
2. 在顶部系统信息栏找到 **"ADAMS ⚙️"** 按钮
3. 点击按钮打开配置面板

## 🛠️ 配置项说明

### 1. 大模型 API 端点
- **用途**：LLM 服务的 API 端点 URL
- **格式**：`https://api.provider.com/v1/chat/completions`
- **示例**：
  - OpenAI: `https://api.openai.com/v1/chat/completions`
  - Claude: `https://api.anthropic.com/v1/messages`
  - 自定义: `https://your-domain.com/v1/chat/completions`

### 2. 模型名称
- **用途**：要使用的具体模型名称
- **格式**：字符串，如 `gpt-4`, `claude-3-opus`, `llama-3-70b`
- **注意**：必须与 API 提供商支持的模型名称一致

### 3. API Key
- **用途**：访问 API 的认证密钥
- **格式**：通常以特定前缀开头（如 `sk-`, `x-api-key` 等）
- **安全提示**：密钥仅存储在本地浏览器中

## 🚀 使用步骤

### 首次配置
1. 点击 **"ADAMS ⚙️"** 按钮
2. 在输入框中填写：
   - API 端点
   - 模型名称  
   - API Key
3. 点击 **"保存"** 按钮
4. 配置立即生效

### 加载已有配置
1. 点击 **"ADAMS ⚙️"** 按钮
2. 点击 **"加载"** 按钮
3. 已保存的配置会自动填充到输入框

### 重置配置
1. 点击 **"ADAMS ⚙️"** 按钮
2. 点击 **"重置"** 按钮
3. 确认清空所有配置信息

## 🔧 技术细节

### 本地存储键名
- `magi_apiEndpoint`: API 端点
- `magi_model`: 模型名称
- `magi_apiKey`: API 密钥

### 配置更新
每次保存后，系统会：
1. 更新 `CONFIG.apiEndpoint`
2. 更新 `CONFIG.model`
3. 更新 `CONFIG.apiKey`

### 验证机制
- 保存前验证所有字段都不为空
- 实时更新全局配置对象

## ⚠️ 注意事项

### 安全提醒
- API Key 仅存储在本地浏览器
- 不要在公共计算机上保存敏感密钥
- 定期更换 API Key

### 兼容性
- 需要支持 OpenAI 格式的 API（兼容 v1/chat/completions）
- 需要正确的 HTTP(S) 端点格式

### 故障排除
- **无法保存**: 检查浏览器是否禁用了 localStorage
- **配置不生效**: 刷新页面后重试
- **API 错误**: 检查端点、模型名和密钥是否正确

## 💡 最佳实践

1. **测试连接**：配置完成后先发送简单查询测试
2. **备份配置**：记录配置信息以防丢失
3. **定期清理**：不再使用时清除本地存储

---

**版本**: MAGI SYSTEM v3.0+  
**功能**: ADAMS 容器配置面板  
**发布**: 2026-05-04