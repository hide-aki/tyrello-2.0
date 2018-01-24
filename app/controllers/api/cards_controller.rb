class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    
    if @card.save!
      render :show
    else
      render :json, @card.errors.full_messages, status: 422
    end
  end
  
  def show
    @board = Board.find(params[:id])
    @lists = @board.lists
    @cards = []
    @card_ids = []

    @lists.each do |list|
      list.cards.each {|card| @cards << card}
    end

    @cards.each { |card| @card_ids << card.id }

    render :show
  end
  private
  def card_params
    params.require(:card).permit(:title, :list_id)
  end
end
