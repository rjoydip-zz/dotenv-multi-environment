import { expect, test } from 'vitest'
import main from "../main"

test('Test env spcified', () => {
    expect(main.DOTENV_PROP).toBe('Test environment value');
})