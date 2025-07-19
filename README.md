# F1 Reaction Time Test 🏎️

Test your reflexes like a Formula 1 driver! When the lights go out, GO GO GO!

🔗 **Live Demo**: [https://f1-reaction-test-nu.vercel.app/](https://f1-reaction-test-nu.vercel.app/)

## Features

### 🎮 Game Features
- **F1-style start lights** - Authentic 5-light countdown sequence
- **Reaction time measurement** - Precise millisecond accuracy
- **Performance ranking** - Compare with F1 driver standards
- **Personal records** - Track your best times and average
- **Visual effects** - Speed lines, trophy animations, and more

### 📊 Analytics & Tracking
- **Google Analytics 4** integration with custom events
- **Search keyword tracking** - Monitor traffic sources
- **User engagement metrics** - Time spent, activity tracking
- **Performance analytics** - Reaction time distribution

### 🎯 Performance Levels
- 👑 **P1 WORLD CHAMPION** - Under 150ms
- 🏆 **P2 PODIUM FINISHER** - 150-200ms
- 🎯 **P3 POINTS SCORER** - 200-250ms
- 🏁 **P10 GRID STARTER** - 250-300ms
- 💥 **DNF ENGINE FAILURE** - Over 300ms

## Tech Stack

- **Frontend**: Pure HTML, CSS, JavaScript (No frameworks!)
- **Analytics**: Google Analytics 4
- **Monetization**: Google AdSense
- **Hosting**: Vercel
- **SEO**: Schema.org structured data, Open Graph tags

## GA4 Custom Events

```javascript
// Game events
game_start - When user starts a new game
game_complete - With reaction_time and performance_level
new_personal_record - When beating personal best

// Engagement events  
page_time_spent - Total time on page
user_active - Every 30 seconds
share - Social sharing attempts

// Acquisition events
traffic_source - Search keywords and referrer tracking
```

## Marketing & Promotion

### UTM Parameters
```
?utm_source=reddit&utm_medium=post&utm_campaign=f1_community
?utm_source=instagram&utm_medium=story&utm_campaign=reaction_challenge
```

### Target Communities
- Reddit: r/formula1, r/webgames
- Social: Instagram Reels, TikTok challenges
- Forums: F1 fan communities

## Local Development

1. Clone the repository
```bash
git clone https://github.com/data-jeong/f1-reaction-test.git
```

2. Open index.html in your browser
```bash
open index.html
```

3. For GA4 testing, use Google Analytics Debugger Chrome extension

## Deployment

Automatically deployed to Vercel on push to main branch.

## License

MIT License

## Contact

For questions or suggestions, please open an issue on GitHub.

---

**Average human reaction time**: 250ms  
**F1 driver average**: 150-200ms  
**Can you beat them?** 🏁
