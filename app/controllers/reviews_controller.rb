class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create
        problem = BoulderProblem.find(params[:boulder_problem_id])
        review = problem.reviews.create!(review_params)
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

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:date, :completed, :boulder_rating, :notes, :boulder_problem_id, :user_id)
    end

end
