json.byId do
    json.set! @board.id do
      json.extract! @board, :id, :name, :starred
    end
end


json.allIds do
  json.personal do
    json.array! @board_id
  end
end