class ReviewsController < ApplicationController

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = @current_user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = @current_user.reviews.find(params[:id])
        review.delete
        head :no_content
    end

    private

    def review_params
        params.permit(:date, :completed, :boulder_rating, :notes, :boulder_problem_id)
    end

end

