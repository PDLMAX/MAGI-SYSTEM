# MAGI-SYSTEM
Magi-System Decision Interface (Inspired by Neon Genesis Evangelion)。
这是一个受《新世纪福音战士》启发的三贤者决策系统界面，只需通过API就可以接入自己想要的主流大模型智能体。

A decision-making interface inspired by the **Magi supercomputer system** from *Neon Genesis Evangelion*. This application integrates three independent AI agents (analogous to **Melchior**, **Balthasar**, and **Casper**) that analyze the same prompt in parallel. The final decision is rendered via a majority vote mechanism, ensuring a balanced and triangulated output.

**Key Features:**
- **Triple-Sage Architecture:** Three AI slots operate simultaneously, each representing a different logical or personality perspective (Scientist, Mother, Strategist).
- **Bring Your Own API Key:** Fully model-agnostic. Connect your own API keys for mainstream LLMs such as **OpenAI GPT-4**, **Anthropic Claude**, **Google Gemini**, or any OpenAI-compatible endpoint.
- **Voting & Deliberation:** The system presents individual verdicts from each sage along with the final consensus result.
- **EVA-Inspired Aesthetics:** The UI is designed to reflect the critical, high-stakes atmosphere of NERV HQ.

*The fate of the world rests on the consensus of three different AIs.*

# 三贤者决策系统 (EVA风格界面)

一个受《新世纪福音战士》中**三贤者超级计算机系统（Magi）** 启发的AI决策界面。该系统集成了三个独立的人工智能体（分别对应**梅尔基奥尔、巴尔萨泽、卡斯帕**三种思维模式），对同一问题并行分析，并通过多数表决机制输出最终决策，确保结果的平衡与交叉验证。

**核心功能：**
- **三贤者架构：** 三个AI槽位同时运行，可分别赋予不同的思维提示词（科学理性、母性直觉、战略进取）。
- **接入自有 API：** 模型无关设计。支持接入主流大模型 API，如 国外大模型**OpenAI GPT-4**、**Anthropic Claude**、**Google Gemini** 、国内大模型**豆包**、**千问**、**Deepseek**或任何兼的自定义端点。
- **投票与审议：** 系统将清晰展示三位贤者的独立判断及最终的合议结论。
- **EVA风格界面：** 视觉设计还原 NERV 总部作战指挥屏的紧张感与专业感。

*人类的命运，将由三种不同的AI思维共同决定。*

<img width="1416" height="817" alt="截屏2026-04-17 19 11 14" src="https://github.com/user-attachments/assets/7d47fc31-5e83-4256-9a98-814012a2d9ea" />
<img width="1321" height="819" alt="截屏2026-04-18 10 03 44" src="https://github.com/user-attachments/assets/9941f562-1574-4455-bd76-8ff3056cd0ef" />

#功能：
1. 三贤者决策模式：文本框中输入你想要的问题-执行，三个大模型同时分析并表决
   <img width="1440" height="817" alt="截屏2026-04-20 21 10 55" src="https://github.com/user-attachments/assets/ba04bbc3-bc71-4ab8-96cf-90b0034c882f" />

3. 单模对话模式：可单独与其中一个模型进行对话
   <img width="1306" height="704" alt="截屏2026-04-18 22 00 41" src="https://github.com/user-attachments/assets/be10ada5-7f9a-4ee8-8bf5-75b531c5926b" />

#如何绑定：
1. 打开index文档： 找到"===== CONFIGURATION ====="配置项目 
2. 找到对应  apiEndpoint: '',  // 配置你的豆包 API 端点
           apiKey: '',       // 配置你的豆包 API Key
3. 注意：提供个人的API 需要去大模型网站上自行申请


