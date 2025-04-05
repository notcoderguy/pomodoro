# Pomodoro Todo Application

A productivity application combining Pomodoro timer functionality with task management.

## Features

- Pomodoro timer with configurable work/break intervals
- Task management system to track todos
- Productivity statistics and history
- Responsive design for all devices

## Technology Stack

- Frontend: React + Vite
- Backend: Bun runtime
- Styling: CSS Modules
- Build: Vite
- Package Manager: Bun

## Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Start development server:
```bash
bun run dev
```

4. Build for production:
```bash
bun run build
```

## Configuration

Environment variables:
- `VITE_POMODORO_DURATION`: Work interval duration (default: 25)
- `VITE_SHORT_BREAK_DURATION`: Short break duration (default: 5) 
- `VITE_LONG_BREAK_DURATION`: Long break duration (default: 15)

## Usage

1. Add tasks to your todo list
2. Start the Pomodoro timer
3. Work until the timer completes
4. Take a short break (5 minutes)
5. After 4 Pomodoros, take a longer break (15 minutes)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
