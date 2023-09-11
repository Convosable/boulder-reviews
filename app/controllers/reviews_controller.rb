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

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:date, :completed, :boulder_rating, :notes, :boulder_problem_id, :user_id)
    end

end
