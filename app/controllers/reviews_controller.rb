class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create
        # put find Boulder in here and create via the boulder??
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = find_review
        review.delete
        head :no_content
    end


    # is this the right way to do this?? I could always filter in the frontend (only display sessions == to current_user) but i dont think thats the right way to do it??)
    def user_review
        sessions = @current_user.review
        render json: sessions, status: :ok
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:date, :completed, :boulder_rating, :notes, :boulder_problem_id, :user_id)
        # boulder_problem_id & user_id used just for postman testing purposes?
    end

end
