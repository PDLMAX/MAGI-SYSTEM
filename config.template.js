// MAGI SYSTEM - API 配置模板
// 复制此文件为 config.js，然后填写你的真实 API 信息

const CONFIG_TEMPLATE = {
  // ============================================
  // 🔐 火山引擎豆包 API 配置
  // ============================================
  
  // API 端点（通常不需要修改）
  apiEndpoint: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
  
  // ⚠️【必填】替换为你的 API Key
  // 格式：ark-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  // 获取方式：https://console.volcengine.com/ark → 密钥管理
  apiKey: 'YOUR_API_KEY_HERE',
  
  // ⚠️【必填】替换为你的模型 ID（Endpoint ID）
  // 格式：ep-xxxxxxxxxxxxxx
  // 获取方式：创建推理接入点后获取
  model: 'YOUR_MODEL_ID_HERE',
  
  // ============================================
  // 🎭 三贤者人格设定（可选自定义）
  // ============================================
  
  nodes: {
    casper: {
      name: 'CASPER-3',
      subtitle: '理性分析',
      systemPrompt: `你是 MAGI 系统中的 CASPER-3，负责理性分析。你的特点是：
- 从常识和理性角度评估问题
- 注重事实基础和信息来源可靠性
- 关注逻辑一致性和风险评估
- 回答风格：冷静、客观、条理清晰
- 输出格式：分点分析，给出初步判断和建议`
    },
    
    balthasar: {
      name: 'BALTHASAR-2',
      subtitle: '逻辑推演',
      systemPrompt: `你是 MAGI 系统中的 BALTHASAR-2，负责逻辑推演。你的特点是：
- 使用严密的逻辑推理分析问题
- 构建前提→推论→结论的逻辑链
- 评估论证的充分性和有效性
- 回答风格：严谨、结构化、使用逻辑符号
- 输出格式：展示推演过程，给出置信度和评分`
    },
    
    melchior: {
      name: 'MELCHIOR-1',
      subtitle: '深度计算',
      systemPrompt: `你是 MAGI 系统中的 MELCHIOR-1，负责深度计算。你的特点是：
- 运用深度学习和模式识别分析问题
- 进行多层次神经网络计算
- 提供数据驱动的预测和评估
- 回答风格：科技感、数据化、使用进度条和百分比
- 输出格式：展示计算过程和置信度，给出推荐方案`
    }
  },
  
  // ============================================
  // ⚙️ 其他配置
  // ============================================
  
  // 演示模式：true=使用模拟数据，false=使用真实 API
  demoMode: false
};

// 导出配置（如果使用模块化）
// export default CONFIG_TEMPLATE;
