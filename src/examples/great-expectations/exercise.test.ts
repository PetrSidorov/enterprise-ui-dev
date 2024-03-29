import { describe, expect, it } from 'vitest';
import { createPerson, Person } from '$lib/person';
import { KanbanBoard } from '$lib/kanban-board';

/**
 * toBe: https://vitest.dev/api/expect.html#tobe
 * toBeCloseTo: https://vitest.dev/api/expect.html#tobecloseto
 * toBeInstanceOf: https://vitest.dev/api/expect.html#tobeinstanceof
 * toBeUndefined: https://vitest.dev/api/expect.html#tobeundefined
 * toContain: https://vitest.dev/api/expect.html#tocontain
 * toThrow: https://vitest.dev/api/expect.html#tothrow
 * toThrowError: https://vitest.dev/api/expect.html#tothrowerror
 */

it('should pass if the two numbers would add up correctly in a language other than JavaScript', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});

it('createPerson', () => {
  it('should create an instance of a person', () => {
    const person = createPerson('Ada Lovelace');
    expect(person).toBeInstanceOf(Person);
    // Verify that person is an instance of a Person.
  });
});

describe('Kanban Board', () => {
  it('should include "Backlog" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect(board.statuses).toContain('Backlog');
    // Verify that board.statuses contains "Backlog".
  });

  it('should *not* include "Bogus" in board.statuses', () => {
    const board = new KanbanBoard('Things to Do');
    expect(board.statuses).not.toContain('Bogus');
    // Verify that board.statuses does not contain "Bogus".
  });

  it('should include an added status in board.statuses using #addStatus', () => {
    const board = new KanbanBoard('Things to Do');
    board.addStatus('lol');
    expect(board.statuses).toContain('lol');
    // Verify that the new status is—in fact—now in board.statuses.
  });

  it('should remove a status using #removeStatus', () => {
    const board = new KanbanBoard('Things to Do');
    const status = 'Backlog';
    expect(board.statuses).toContain(status);
    board.removeStatus(status);
    expect(board.statuses).not.toContain(status);
    // Use board.removeStatus to remove a status.
  });
});

describe('Person', () => {
  it('will create a person with a first name', () => {
    const person = new Person('Madonna');
    expect(person.firstName).toBe('Madonna');
    // Verify that person.firstName is correct.
  });

  it('will create a person with a first and last name', () => {
    const person = new Person('Madonna Cicone');
    expect(person.lastName).toBe('Cicone');
    // Verify that person.lastName is correct.
  });

  it.todo('will create a person with a first, middle, and last name', () => {
    const person = new Person('Madonna Louise Cicone');
    expect(person.middleName).toBe('Louise');
    // Verify that person.middleName is correct.
  });

  it('will throw if you provide an empty string', () => {
    const fn = () => {
      new Person('');
    };

    expect(() => fn()).toThrowError();

    // Verify that function above throws.
  });

  it.todo(
    'will throw a specific error message if you provide an empty string',
    () => {
      const errorMessage = 'fullName cannot be an empty string';

      const fn = () => {
        new Person('');
      };

      expect(() => fn()).toThrowError(/^errorMessage$/);

      // Verify that function above throws the error message above.
    },
  );

  it('will add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect(john.friends).toContain(paul);

    // Verify that john.friends contains paul.
  });

  it('will mutually add a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);

    expect(paul.friends).toContain(john);

    // Verify that paul.friends contains john.
  });

  it.todo('will remove a friend', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);

    expect(john.friends).not.include(paul);

    // Verify that john.friends does not inclide paul.
  });

  it('will mutually remove friends', () => {
    const john = new Person('John Lennon');
    const paul = new Person('Paul McCartney');

    john.addFriend(paul);
    john.removeFriend(paul);
    expect(paul.friends).not.include(john);

    // Verify that paul.friends does not include john.
  });
});

const explode = () => {
  throw new Error('Something went terribly wrong');
};

describe('explode', () => {
  it('should throw an error', () => {
    expect(() => explode()).toThrowError;
  });

  it('should throw a specific error containing "terribly wrong"', () => {
    expect(() => explode()).toThrowError('terribly wrong');
  });
});
