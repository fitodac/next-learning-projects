const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database(
	'./src/database/todo.sqlite',
	sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
	function (err) {
		if (err) {
			return console.error(err.message)
		} else {
			console.log('Connected to the SQLite database.')
		}
	}
)

db.serialize(async () => {
	await db.run(`DROP TABLE IF EXISTS todo`)

	await db.run(
		`CREATE TABLE IF NOT EXISTS todo (
			id INTEGER PRIMARY KEY,
			task TEXT,
			done BOOLEAN
		)`,
		function (err) {
			// Error handling for table creation
			if (err) return console.error(err.message)

			console.log('Created todo table')

			const fake = [
				{ task: 'Buy groceries', done: false },
				{ task: 'Walk Sam', done: false },
				{ task: 'Fold laundry', done: false },
				{ task: 'Workout', done: false },
			]

			const stmt = db.prepare(`INSERT INTO todo (task, done) VALUES (?,?)`)
			fake.forEach((e) => {
				stmt.run([e.task, e.done], function (err) {
					if (err) return console.error(err.message)
					console.log(`Item added with id ${this.lastID}`)
				})
			})
			stmt.finalize()
		}
	)

	// Close the database connection
	await db.close(function (err) {
		if (err) return console.error(err.message)
		console.log('Closed the database connection.')
	})
})
