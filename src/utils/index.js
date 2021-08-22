/* eslint-disable camelcase */

const mapDBToSongs = ({ id, title, performer }) => ({ id, title, performer });

const mapDBToSong = ({
  id, title, year, performer, genre, duration, inserted_at, updated_at,
}) => ({
  id, title, year, performer, genre, duration, insertedAt: inserted_at, updatedAt: updated_at,
});

module.exports = { mapDBToSongs, mapDBToSong };
