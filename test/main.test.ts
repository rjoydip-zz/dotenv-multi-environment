import { expect, test } from 'vitest'
import main from "../main"

test('Env spcified', () => {
    expect(main.DOTENV_PROP).toStrictEqual('Test environment value')
})

test('Env values object', () => {
    expect(main).toMatchObject({ DOTENV_PROP: 'Test environment value' })
})